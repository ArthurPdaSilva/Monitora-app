import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--espacamentoPadrao);
    background-color: var(--paleta3);
    height: 90vh;
    width: 80vw;
    border-radius: 5px;
    margin: var(--espacamentoPadrao);
    box-shadow: var(--sombraPadrao);

    h1, h2{
        text-align: center;
    }
`;

export const Table = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    min-width: 400px;

    th, td{
        padding: 12px 15px;
    }

    thead{
        tr{
            background-color: var(--paleta2);
            color: var(--paleta3);
            text-align: left;
        }
    }

    tbody{
        tr{
            border-bottom: 1px solid #dddddd;

            &:nth-of-type(even) {
                background-color: #f3f3f3;
            }

            &:last-of-type {
                border-bottom: 2px solid var(--paleta2);
            }
        }
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: var(--espacamentoPadrao);
    justify-content: center;
    width: 100%;

    button{
        color: white;
        background-color: var(--paleta2);
        border-radius: var(--espacamentoPadrao);
        padding: var(--espacamentoPadrao);
        font-size: 1.5em;
    }
`;