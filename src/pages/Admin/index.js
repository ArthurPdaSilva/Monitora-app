import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, Table, ButtonGroup } from './stylesAdmin';

export default function Admin() {
    const [ isLoading, setIsLoading ] = useState(true);
    const { deleteList, loading, list, setList } = useContext(AuthContext);

    useEffect(() => {
        loading();
        setIsLoading(false);
    }, [])

    async function handleDelete(){
        for(let item of list){
            deleteList(item.id);
        }
        
        setList([]);
    }

    return (
        <Container>
            <h1>Dashboard Técnico</h1>
            <hr/>
            <h2>Lista de quem irá hoje</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Estudante</th>
                        <th>Resposta</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.answer}</td>
                        </tr>
                    ))}

                    {isLoading && (
                        <h1>Carregando...</h1>
                    )}
                </tbody>
            </Table>
            <ButtonGroup>
                <button>Gerar Gráfico</button>
                <button onClick={handleDelete}>Limpar</button>
            </ButtonGroup> 
        </Container>
    );
}