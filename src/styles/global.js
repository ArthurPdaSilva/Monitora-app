import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    :root{
        --paleta1: #78BC61;
        --paleta2: #3f6632;
        --paleta3: #FFF;
        --bordaPadrao: 1px solid black;
        --espacamentoPadrao: 10px;
        --sombraPadrao: 2px 2px 3px black;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus{
        outline: none;
    }

    button, svg, label{
        cursor: pointer;
    }

    button{
        border: none;
    }

    html, #root{
        height: 100%;
    }

    body{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--paleta1);
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
    }
`;