import styled from 'styled-components';

import FotoGatoMobile from "../../assets/imagem-gato-h.svg";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-aspect-ratio: 1/1)  {
    justify-content: center;
  }
`;

export const StyledImg = styled.img`
  width: 70vw;
  min-width: 470px;
  max-height: 100vh;

  @media (max-aspect-ratio: 1/1)  {
    display: none;
  }
`;

export const StyledImgMobile = styled.div`
  display: none;
  
  width: 80vw;
  max-height: 30vh;

  background-image: url(${FotoGatoMobile});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  
  rotate: 180deg;
  aspect-ratio: 3 / 1;

  position: absolute;
  bottom: 0;
  align-self: center;

  @media (max-aspect-ratio: 1/1)  {
    display: flex;
  }

  @media (max-width: 440px) {
    background-size: cover;
    height: 20vh;
    width: 100vw;
  }
`;

export const StyledDivCadastro = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  padding: 0 8vw;

  @media (max-width: 460px) {
    padding: 0 32px;
  }
`;

export const StyledDivEtapa = styled.form`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--cor-branco);

  @media (max-width: 460px) {
    gap: 16px;
  }
`;

export const StyledH1 = styled.h1`
  margin: 0;

  font-family: var(--fonte-titulo);
  font-weight: 400;
  font-size: 48px;

  @media (max-width: 460px) {
    font-size: 32px;
  }
`;

export const StyledP = styled.p`
  font-family: var(--fonte-paragrafo);
  font-size: 24px;
  font-weight: 300;
  text-align: justify;

  @media (max-width: 460px) {
    font-size: 16px;
  }
`;