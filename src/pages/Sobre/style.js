import styled from "styled-components";

import FotoSobre from '../../assets/foto-sobre.png';
import FotoCaoGio from '../../assets/cao-giovanna.png';

export const StyledMain = styled.main`
  width: 100%;
  height: fit-content;

  margin-bottom: 0px;
`;

export const StyledInicio = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--cor-roxo);
  padding: 7vw 10vw;

  display: flex;
  gap: 32px;

  @media (max-width: 890px) {
    flex-direction: column-reverse;
    gap: 16px;
    justify-content: center;
  }
`;

export const StyledConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  width: 55%;
  z-index: 1;

  @media (max-width: 890px) {
    width: 100%;
    align-items: center;
  }
`;

export const StyledTitulo = styled.div`
  font-family: var(--fonte-titulo);
  
  p {
    font-size: 48px;
    font-weight: 600;
    color: var(--cor-branco);
    line-height: 60px;
  }
  
  span {
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    color: var(--cor-rosa);
  }

  &:nth-last-child() {
    line-height: 4px;
  }

  @media (max-width: 1060px) {
    p {
      font-size: 32px;
      line-height: 32px;
    }
    
    span {
      font-size: 32px;
      line-height: 32px;
      color: var(--cor-rosa);
    }

    &:nth-last-child() {
      line-height: 2px;
    }
  }
`;
export const StyledTextoProjeto = styled.div`
  font-size: 24px;
  font-family: var(--fonte-paragrafo);
  text-align: justify;
  color: var(--cor-branco);
  margin: 0;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
export const StyledTextoFrase = styled.div`
  font-size: 32px;
  font-family: var(--fonte-titulo);
  color: var(--cor-branco);
  font-weight: 600;
  text-align: left;
  margin: 0;
  margin-right: auto;
  width: 100%;

  span {
    font-size: 32px;
    font-weight: 600;
    color: var(--cor-rosa);
  }

  @media (max-width: 800px) {
    font-size: 16px;

    span {
      font-size: 16px;
      font-weight: 600;
      color: var(--cor-rosa);
    }
  }
`;

export const StyledSeta = styled.img`
  position: absolute;
  width: 48px;
  left: calc(50%);
  aspect-ratio: 1 / 1;
  bottom: 32px;
  transform: translateX(-50%);

  @media (max-width: 890px) {
    width: 32px;
    bottom: 24px;
  }
`;

export const StyledImagemCao = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 90%; 
  background-image: url(${FotoSobre});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

    @media (max-width: 960px) {
      height: 80%;
    }
    
    @media (max-width: 890px) {
      position: relative;
      background-image: url(${FotoCaoGio});
      width: 100%;
      background-position: center;
      background-size: cover;
      height: 20vh;
    }

    @media (max-width: 450px) {
      max-height: 160px;
    }
`;

export const StyledMeio = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5vw 12vw;
  display: flex;
  align-items: center;
  gap: 64px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 8vw 8vw;
    gap: 48px;
  }

  @media (max-width: 800px) {
    padding: 8vw 6vw;
  }
`;

export const StyledEsquerdo = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCirculo = styled.div`
  width: 480px;
  height: 480px;
  border-radius: 50%;
  border: 1px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledDireito = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    text-align: center;
    align-items: center;
  }
`;

export const StyledTituloProtetores = styled.h1`
  font-size: 48px;
  font-family: var(--fonte-titulo);
  font-weight: 500;
  color: var(--cor-roxo);
  margin: 0;

  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

export const StyledTextoProtetores = styled.p`
  font-size: 30px;
  font-family: var(--fonte-paragrafo);
  font-weight: 400;
  color: var(--cor-roxo);
  text-align: justify;

  @media (max-width: 800px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const StyledFraseProtetores = styled.div`
  font-size: 30px;
  font-family: var(--fonte-paragrafo);
  color: var(--cor-roxo);
  font-weight: 700;
  text-align: justify;
  border-radius: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 800px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const StyledSetaProtetores = styled.img`
  width: 48px;
  margin-top: 16px;
  align-self: center;
  color: var(--cor-roxo);

  @media (max-width: 1024px) {
    align-self: center;
  }

  @media (max-width: 690px) {
    width: 32px;
  }
`;

export const StyledFim = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: var(--cor-roxo);
  padding: 5vw 12vw;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 8vw;
  }

  @media (max-width: 800px) {
    padding: 8vw 6vw;
  }

  @media (max-width: 690px) {
    padding-bottom: 32px;
    gap: 0;
  }
`;

export const StyledEsquerdoEquipe = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: auto;
  
  @media (max-width: 1024px) {
    text-align: center;
    align-items: center;
    justify-content: end;
    height: fit-content;
    
    padding: 0;
    gap: 16px;
  }
`;

export const StyledTituloEquipe = styled.h1`
  font-size: 48px;
  font-family: var(--fonte-titulo);
  color: var(--cor-branco);
  font-weight: 600;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const StyledTextoEquipe = styled.p`
  font-size: 32px;
  font-family: var(--fonte-paragrafo);
  color: var(--cor-branco);

  @media (max-width: 1000px) {
    font-size: 24px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const StyledDireitoEquipe = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImagemEquipe = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  border-radius: 32px;
  border: 8px solid var(--cor-branco);
  overflow: hidden;
  transform: rotate(5deg);  
  object-position: center;

  img {
    width: 100%;
    aspect-ratio: 1 / 0.8;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 1000px) {
    max-width: 80%;
  }
`;