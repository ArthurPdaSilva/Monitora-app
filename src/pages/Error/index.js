import { Link } from "react-router-dom";
import { ContainerError } from './stylesError';

export default function Admin() {
    return (
        <ContainerError>
            <h1>404</h1>
            <h3>Ops! Página não encontrada</h3>
            <p>
                Desculpe, mas essa página que você está buscando não existe ou talvez tenha tido seu nome alterado.
            </p>
            <Link to="/home">Página inicial</Link>
        </ContainerError>
    );
}