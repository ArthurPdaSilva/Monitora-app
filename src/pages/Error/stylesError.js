import styled from 'styled-components';

export const ContainerError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: var(--espacamentoPadrao);
    background-color: var(--paleta3);
    height: 80vh;
    border-radius: 5px;
    padding: var(--espacamentoPadrao);
    margin: var(--espacamentoPadrao);
    box-shadow: var(--sombraPadrao);

    h1{
        font-size: 8rem;
    }

    h3{
        font-size: 2rem;
    }

    p{
        font-size: 1.2rem;
        text-align: center;
        width: 50%;
    }

    a{
        color: blue;
    }
`;