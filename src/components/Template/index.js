import { useCallback, useContext, useState } from "react";
import { Container, Form, GroupInput, GroupRadio, Field } from './styles.js';
import { FiUser } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth.js";

export default function Template({header, legend, dataArray}){
    const [ name, setName ] = useState('');
    const [ data, setData ] = useState(dataArray[0]);
    const [ answers, setAnswers ] = useState(dataArray);

    const { user, setUser, verifyUser, storageUser, answer, answerToday } = useContext(AuthContext);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if(header !== "Questionário do dia"){
            verifyUser(name, data);
        }else{
            answerToday(data);
        }
        
    }, [data, name, user, setUser, storageUser]);

    return(
        <Container>
            <h1>{header}</h1>

            <Form onSubmit={handleSubmit}>
                
                {header !== "Questionário do dia" && 
                    (<GroupInput>
                    <label>
                        <FiUser size={30} color="#FFF"/>
                    </label>
                    <input type="text" value={name} placeholder="Nome Completo" onChange={(e) => setName(e.target.value)}/>
                </GroupInput>
                )}
                
                <Field>
                    <legend>{legend}</legend>
                    
                    {answers.map(item => (
                        <GroupRadio key={item}>
                            <input type="radio" name="group" id={item} value={item} onChange={(e) => setData(e.target.value)}/>
                            <label htmlFor={item}>{item}</label>
                        </GroupRadio>
                    ))}
                </Field>


                <button type="submit">
                    {header === "Questionário do dia" ? "Enviar" : "Entrar"}
                </button>
            </Form>
        </Container>
    )
}