import styled from "styled-components";

export const StyledFundo = styled.div`
  position: fixed;
  z-index: 2;
  
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: color-mix(in srgb, var(--cor-roxo) 20%, transparent);

  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled.div`
  background-color: var(--cor-branco);
  width: 60vw;
  min-width: 600px;
  height: 70vh;

  border-radius: 32px;
  display: flex;
  align-items: center;

  overflow: hidden;

  @media (max-width: 680px) {
    width: 90vw;
    min-width: 0;
    height: 60vh;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const StyledImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 680px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 100%;
    aspect-ratio: 1 / 0.4;
  }
`;

export const StyledConteudo = styled.form`
  width: 100%;
  padding: 32px;
  
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 680px) {
    gap: 8px;
    padding: 16px
  }
`;

export const StyledH1 = styled.h1`
  color: var(--cor-roxo);
  font-family: var(--fonte-titulo);
  font-weight: 500;
  font-size: 32px;

  @media (max-width: 680px) {
    font-size: 24px;
  }
`;

export const StyledDescricao = styled.p`
  color: var(--cor-roxo);
  font-family: var(--fonte-paragrafo);
  font-size: 16px;

  max-height: 200px;
  overflow-y: auto;

  @media (max-width: 480px) {
    max-height: 100px;
  }
`;

export const StyledBotoes = styled.p`
  display: flex;
  gap: 8px;
`