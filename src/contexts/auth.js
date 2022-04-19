import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        function storageUser(){
            const isUser = localStorage.getItem('user');
            if(isUser) setUser(JSON.parse(isUser));
        }

        storageUser();
    }, []);

    function verifyAdmin(name){
        let names = ["Daniel465", "Arthur879", "Victor746"];
        if(names.includes(name)){

            const data = {
                name: name,
                occupation: "admin"
            }

            setUser(data);
            storageUser(data);
        }else{
            alert("Id de admin inválido.");
        }
    }

    function storageUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, setUser, verifyAdmin, storageUser}}>
            {children}
        </AuthContext.Provider>
    )

}