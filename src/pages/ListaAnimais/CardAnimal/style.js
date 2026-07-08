import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  
  width: 100%;
  aspect-ratio: 1 / 1.5;

  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 16px var(--cor-lilas);
  cursor: pointer;

  display: flex;

  @media (max-width: 480px) {
    min-width: 192px;
    max-width: 300px;
  }
`;

export const CardImagem = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BarraInferior = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background: var(--cor-rosa);
  display: flex;
  
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  height: 15%;

  ${CardContainer}:hover & {
    height: 50%;
    background: var(--cor-roxo);
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 1500px) {
    ${CardContainer}:hover & {
      height: 57%;
    }
  }

  @media (max-width: 480px) {
    height: 12%;

    ${CardContainer}:hover & {
      height: fit-content;
    }  
  }
`;

export const SetaContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  ${CardContainer}:hover & {
    opacity: 0;
    visibility: hidden;
  }

  img {
    width: 32px;
    height: auto;
  }
`;

export const ConteudoHover = styled.div`
  padding: 6%;
  width: 100%;
  height: 100%;

  opacity: 0;
  transition: all 0.3s ease 0.1s;
  
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  ${CardContainer}:hover & {
    opacity: 1;
  }

  .icone {
    width: 10%;
    height: auto;
  }
`;

export const StyledNomeIdade = styled.div`
  h1 {
    font-family: var(--fonte-titulo);
    font-size: 32px;
    font-weight: 500;
    color: var(--cor-branco);
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: var(--cor-rosa);
    font-weight: 500;
  }
`;

export const InfoLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: var(--fonte-paragrafo);
`;

export const InfoText = styled.span`
  font-family: var(--fonte-paragrafo);
  font-size: 16px;
  color: var(--cor-branco);
  flex: 1;
  overflow: hidden;
`;
