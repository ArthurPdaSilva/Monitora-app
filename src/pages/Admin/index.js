import { Container } from './stylesAdmin';

export default function Admin() {
    return (
        <Container>
            <h1>Dashboard Técnico</h1>
            <hr/>
            <h3>Lista de quem irá hoje</h3>
            <table>
                <thead>
                    <tr>
                        <th>Estudante</th>
                        <th>Resposta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Edgar</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>Franscico</td>
                        <td>Não</td>
                    </tr>
                    <tr>
                        <td>Fernando</td>
                        <td>Talvez</td>
                    </tr>
                    <tr>
                        <td>Edgar</td>
                        <td>Sim</td>
                    </tr>
                    <tr>
                        <td>Franscico</td>
                        <td>Não</td>
                    </tr>
                    <tr>
                        <td>Fernando</td>
                        <td>Talvez</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>Gerar Gráfico</button>
                <button>Limpar</button>
            </div> 
        </Container>
    );
}