import Template from '../../components/Template/index.js';

export default function Home() {

    return (
        <Template header="Questionário do dia" legend="Você irá hoje?" dataArray={["Sim", "Não", "Não sei"]}/>
    );
}