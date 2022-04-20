import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--espacamentoPadrao);
    padding: var(--espacamentoPadrao);
    background-color: var(--paleta3);
    height: 90vh;
    width: 80vw;
    border-radius: 5px;
    margin: var(--espacamentoPadrao);
    box-shadow: var(--sombraPadrao);

    h1, h3{
        text-align: center;
    }
`;