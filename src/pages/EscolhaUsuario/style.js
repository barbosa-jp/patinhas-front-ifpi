import styled from "styled-components";

import FotoGatoV from '../../assets/imagem-gato-v.svg';
import FotoGatoH from '../../assets/imagem-gato-h.svg';
import FotoCaoH from '../../assets/imagem-cao-h.svg';
import FotoCaoV from '../../assets/imagem-cao-v.svg';


export const StyledMain = styled.main`
  height: 100%;
  width: auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const StyledDivImg = styled.div`  

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImg = styled.div`
  height: 60vw;
  max-height: 100vh;
  aspect-ratio: 1 / 3;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  &.esquerda {
    background-image: url(${FotoGatoV});
  }

  &.direita {
    background-image: url(${FotoCaoV});
  }
  
  @media (max-width: 920px) {
    height: auto;
    width: 50vw;
    aspect-ratio: 3 / 1;

    &.esquerda {
      background-image: url(${FotoGatoH});
    }   

    &.direita {
      background-image: url(${FotoCaoH});
    } 
  }

  @media ((max-height: 1400px) and (max-width: 920px)) {
    width: 100vw;
  }

  @media (max-width: 500px) {
    min-width: 100vw;
    aspect-ratio: 2.5 / 1;
    background-size: cover;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1190px) {
    gap: 16px;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;

  color: var(--cor-branco);
  font-size: 48px;
  font-family: var(--fonte-titulo);
  font-weight: 500;

  @media (max-width: 1190px) {
    font-size: 32px;
  }
`;

export const StyledBotoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledButton = styled.button`
  width: 40vw;
  min-width: 350px;
  height: 28vh;

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 64px;

  text-align: center;
  background-size: cover;

  color: var(--cor-roxo);
  border: none;

  cursor: pointer;

  transform: scale(1);
  transition: all 0.5s;
  
  &:active {
    transform: scale(0.95);
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1190px) {
    width: 45vw;
    height: 24vh;
    max-height: 200px;
  }

  @media (max-width: 920px) {
    width: 60vw;
    height: 20vh;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 32px;
  font-family: var(--font-titulo);
  font-weight: bold;

  @media (max-width: 1190px) {
    font-size: 24px;
  }
`

export const StyledP = styled.p`
  font-family: var(--font-paragrafo);
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 1190px) {
    font-size: 20px;
  }
`
