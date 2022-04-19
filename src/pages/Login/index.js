import Template from "../../components/Template";

export default function Login() {
    return(
        <Template header="Aviso único por usúario" legend="Quem é você?" dataArray={["Sou estudante", "Sou administrador"]}/>
    )
}