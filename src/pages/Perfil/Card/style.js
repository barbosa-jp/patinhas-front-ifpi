import styled from "styled-components";

export const StyledCard = styled.form`
  background-color: var(--cor-branco);
  width: 47%;
  height: fit-content;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  border-radius: 32px;
  
  box-shadow: 8px 8px 16px var(--cor-lilas);
  
  overflow: hidden;

  @media (max-width: 980px) {
    width: 90%;
    height: fit-content;
    min-height: fit-content;
  }
`;

export const StyledCardInfo = styled.div`
  display: flex;

  height: fit-content;

  font-size: 8px;
  font-family: var(--fonte-paragrafo);
  color: var(--cor-roxo);

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledImagem = styled.div`
  width: 50%;
  min-height: 100%;

  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;

  @media (max-width: 980px) {
    width: 30%;
  }

  @media (max-width: 500px) {
    width: 100%;
    min-height: 0;
    aspect-ratio: 1 / 0.5;
  }
`;

export const StyledDados = styled.div`
  width: 50%;
  height: fit-content;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  
  padding: 16px;

  &.cuidador {
    width: 100%;
  }

  h1 {
    font-size: 24px;
  }

  p {
    overflow-y: auto;
    max-height: 80px;
    font-size: 16px;
  }

  @media (max-width: 980px) {
    width: 70%;
    padding: 8px;
    gap: 4px;
  
    h1 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const StyledBotoes = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
  
  button {
    width: 100%;
    max-height: 64px;
    border: none;

    display: flex;
    justify-content: center;
    
    padding: 8px 16px;
    
    text-align: center;
    font-size: 16px;
    font-family: var(--fonte-paragrafo);
    font-weight: bold;
    color: var(--cor-roxo);
    
    background-color: var(--cor-rosa);
    cursor: pointer;
  }
  
  .aprovado, .aprovada {
    background-color: var(--cor-verde);
  }

  .pendente, .editar {
    background-color: var(--cor-lilas);
  }

  .doador, .cuidador {
    cursor: default;
  }
`;