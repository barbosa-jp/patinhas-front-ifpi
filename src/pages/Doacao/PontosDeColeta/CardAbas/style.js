import styled from 'styled-components';

export const StyledCard = styled.div`
    background: var(--cor-branco);
    border-radius: 16px;

    box-shadow: 0 4px 15px var(--cor-lilas);
    transition: all 0.3s ease;
    width: 48%;
    min-width: 30vw;

    height: fit-content;
    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 940px) {
        width: 100%;
    }
`;

export const StyledTexto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 16px;

    
    p {
        font-size: 16px;
        color: #473469;
        font-family: var(--fonte-paragrafo);
    }
`;

export const StyledTitulo = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--cor-roxo);
    
    h1 {
        font-size: 32px;
        font-family: var(--fonte-titulo);
        font-weight: 500;

        @media (max-width: 940px) {
            font-size: 24px;
        }
    }

    span {
        font-size: 16px;
        font-family: var(--fonte-paragrafo);
    }
`;

export const StyledImagem = styled.div`
    img {
        width: 100%;
        aspect-ratio: 1 / 0.1;
        object-fit: cover;
    }
`;
export const StyledBotao = styled.div`
    font-family: 'Alata', sans-serif;
    font-size: 20px;
    width: 100%;
    height: fit-content;
    border: none;
    padding: 0 8px;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s ease;
`;

export const StyledBotoes = styled.div`
    display: flex;
    gap: 8px;
`;