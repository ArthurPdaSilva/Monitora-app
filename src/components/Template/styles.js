import styled from 'styled-components'

export const Container = styled.div`

    &, form{
        display: flex;
        flex-direction: column;
    }

    h1, button{
        color: white;
        background-color: var(--paleta2);
    }

    h1{
        display: flex;
        justify-content: center;
        padding: 30px;
        border-top-left-radius: var(--espacamentoPadrao);
        border-top-right-radius: var(--espacamentoPadrao);
    }

`;

export const Form = styled.form`
    align-items: center;
    padding: var(--espacamentoPadrao);
    background-color: var(--paleta3);
    border-bottom-left-radius: var(--espacamentoPadrao);
    border-bottom-right-radius: var(--espacamentoPadrao);
    gap: var(--espacamentoPadrao);

    p{
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        height: 10vw;
    }

    button{
        width: 100%;
        border-radius: var(--espacamentoPadrao);
        padding: var(--espacamentoPadrao);
        font-size: 1.5em;
    }
`;

export const GroupInput = styled.div`
    display: flex;
    align-items: center;

    input{
        padding: var(--espacamentoPadrao);
        font-size: 1.5em;
        border: 1px solid gray;
        border-top-right-radius: var(--espacamentoPadrao);
        border-bottom-right-radius: var(--espacamentoPadrao);

        &:focus{
            border: 1px solid var(--paleta2);
        }
    }

    label{
        padding: calc(var(--espacamentoPadrao) - 3px);
        background-color: var(--paleta2);
        border-top-left-radius: var(--espacamentoPadrao);
        border-bottom-left-radius: var(--espacamentoPadrao);
    }
`;

export const Field = styled.fieldset`
    width: 100%;
    border: 1px solid var(--paleta2);
`;

export const GroupRadio = styled.div`
    margin: var(--espacamentoPadrao);

    input{
        margin-right: 5px;
    }
`;