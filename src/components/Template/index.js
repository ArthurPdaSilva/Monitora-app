import { useState } from "react";
import { Container, Form, GroupInput, GroupRadio, Field } from './styles.js';
import { FiUser, FiLock } from "react-icons/fi";

export default function Template({header, legend, dataArray}){
    const [ name, setName ] = useState('');
    const [ data, setData ] = useState(dataArray[0]);
    const [ answers, setAnswers ] = useState(dataArray);

    return(
        <Container>
            <h1>{header}</h1>
            
            <Form onSubmit={() => {}}>
                
                {header === "Questionário do dia" && 
                    (<GroupInput>
                    <label>
                        <FiUser size={30} color="#FFF"/>
                    </label>
                    <input type="text" value={name} placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
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

                {header !== "Questionário do dia" && data == "Sou administrador" && (
                    <GroupInput>
                        <label>
                            <FiLock size={30} color="#FFF"/>
                        </label>
                        <input type="text" value={name} placeholder="Seu id text" onChange={(e) => setName(e.target.value)}/>
                    </GroupInput>
                )}

                <button type="submit">
                    {header === "Questionário do dia" ? "Enviar" : "Entrar"}
                </button>
            </Form>
        </Container>
    )
}