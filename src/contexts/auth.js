import db from '../services/firebaseConnection';
import { createContext, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';


export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [ list, setList ] = useState([]);

    useEffect(() => {
        function storageUser(){
            const isUser = localStorage.getItem('user');
            if(isUser) setUser(JSON.parse(isUser));
        }

        storageUser();
    }, []);

    async function verifyUser(name, dataOccupation){
        let nameAdmin = process.env.REACT_APP_USER_ADMIN;

        if(dataOccupation === "Sou estudante" || (name === nameAdmin && dataOccupation === "Sou administrador")){
            await setDoc(doc(db, `users/${name}`), {
                name: name,
                occupation: dataOccupation
            }).then(() => {
                let data = {
                    name: name === nameAdmin ? "adminUser" : name,
                    occupation: dataOccupation,
                }

                setUser(data);
                storageUser(data);

            }).catch((error) => {
                alert(error);
            })
            
        }else{
            alert("Id de admin inválido.");
        }
    }

    async function answerToday(answer){
        await addDoc(collection(db, `answerToday`), {
            name: user.name,
            answer: answer
        }).then(() => {
            return true;
        }).catch((error) => {
            alert(error);
        })
    }

    function storageUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    async function loading(){
        await getDocs(collection(db, `answerToday`)).then((snapshot) => {
            let lista = []
            
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    answer: doc.data().answer
                })
            })

            setList(lista);
            console.log(lista);
        })
    }

    async function deleteList(id){
        await deleteDoc(doc(db, `answerToday/${id}`));
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, setUser, verifyUser, answerToday, storageUser, loading, list, deleteList, setList}}>
            {children}
        </AuthContext.Provider>
    )

}