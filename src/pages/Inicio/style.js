import styled from "styled-components";

import FundoCuidador from '../../assets/fundo-patinhas-roxo.svg';
import FundoDoacao from '../../assets/fundo-patinhas-rosa.svg';

export const StyledMain = styled.main`
  width: 100vw;
  height: fit-content;

  margin-bottom: 64px;

  @media (max-width: 690px) {
    margin-bottom: 32px;
  }
`;

export const StyledInicio = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--cor-roxo);
  padding: 5vw 0;
  justify-content: center;
  align-items: center;

  display: flex;
  gap: 32px;

  @media (max-width: 1024px) and (min-height: 1024px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 16px;
  } 

  img.cao {
    height: 40vw;
    min-height: 70vh;
    border-radius: 0;

    @media (max-width: 1060px) {
      height: 50vw;
      min-height: 40vh;
    }
    
    @media (max-width: 1024px) and (min-height: 1024px) {
      width: 60vw;
      height: auto;
      min-height: 0;
    }

    @media (max-width: 670px) {
      width: 70vw;
      height: auto;
      min-height: 0;
    }    
  }
`;

export const StyledTitulo = styled.div`
  font-family: var(--fonte-titulo);
  text-align: center;
  
  p {
    font-size: 96px;
    color: var(--cor-branco);
    line-height: 48px;
  }
  
  span {
    font-size: 160px;
    line-height: 160px;
    color: var(--cor-rosa);
  }

  &:nth-last-child() {
    line-height: 4px;
  }

  @media (max-width: 1060px) {
    p {
      font-size: 64px;
      line-height: 32px;
    }
    
    span {
      font-size: 120px;
      line-height: 120px;
      color: var(--cor-rosa);
    }

    &:nth-last-child() {
      line-height: 2px;
    }
  }

  @media (max-width: 1024px) and (min-height: 1024px) {
    p {
      font-size: 12vw;
      line-height: 4vw;
    }
    
    span {
      font-size: 24vw;
      line-height: 24vw;
      color: var(--cor-rosa);
    }

    &:nth-last-child() {
      line-height: 0px;
    }
  }

  @media (max-width: 820px) {
    p {
      font-size: 12vw;
      line-height: 4vw;
    }
    
    span {
      font-size: 24vw;
      line-height: 24vw;
      color: var(--cor-rosa);
    }

    &:nth-last-child() {
      line-height: 0px;
    }
  } 
`;

export const StyledSeta = styled.img`
  position: absolute;
  width: 48px;
  aspect-ratio: 1 / 1;
  bottom: 32px;

  @media (max-width: 690px) {
    width: 32px;
    bottom: 24px;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: fit-content;
  padding: 32px 64px;
  padding-bottom: 0;
  
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 690px) {
    padding: 16px 32px;
    gap: 16px;
  }

  .titulo {
    font-size: 40px;
    font-weight: 500;
    font-family: var(--fonte-titulo);
    color: var(--cor-roxo);

    @media (max-width: 690px) {
      font-size: 32px;
    }

    @media (max-width: 460px) {
      font-size: 24px;
    }
  }

  .doacao {
    color: var(--cor-roxo);
    background-image: url(${FundoDoacao});

    @media (max-width: 460px) {
      flex-direction: column-reverse;
    }
  }
  
  .cuidador {
    color: var(--cor-branco);
    background-image: url(${FundoCuidador});
  
    @media (max-width: 460px) {
      flex-direction: column;
    }
  }
  `;

export const StyledCards = styled.div`
  height: 65vh;
  overflow-y: hidden;
  
  @media (max-width: 690px) {
    height: 40vh;
  }

  .animais {
    width: 100%;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 248px);
    place-items: center;
    grid-gap: 32px;

    @media (max-width: 1500px) {
      grid-template-columns: repeat(4, 216px);
    }

    @media (max-width: 1040px) {
      grid-template-columns: repeat(3, 200px);
    }

    @media (max-width: 720px) {
      grid-template-columns: repeat(2, 200px);
    }

    @media (max-width: 480px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 16px 48px;
      gap: 16px;
    }
  }

  .posts {
    width: 100%;
    display: flex;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 690px) {
      padding: 16px;
    }
  }
`;

export const StyledCard = styled.div`
  max-width: 1000px;
  height: fit-content;
  margin: 0 auto;

  background-position: center;
  background-size: cover;
  padding: 32px;
  border-radius: 32px;
  
  display: flex;
  gap: 32px;

  @media (max-width: 870px) {
    padding: 24px;
    gap: 16px;
  }

  @media (max-width: 460px) {
    justify-content: center;
    align-items: center;
  }

  .texto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    
    @media (max-width: 870px) {
      gap: 8px;
    }
  }

  h1 {
    font-size: 48px;
    font-family: var(--fonte-titulo);
    font-weight: 600;

    @media (max-width: 870px) {
      font-size: 32px;
    }

    @media (max-width: 690px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 28px;
    font-family: var(--fonte-paragrafo);

    @media (max-width: 870px) {
      font-size: 16px;
    }
  }

  img {
    width: 30%;
    height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    object-position: center;
    object-fit: cover;

    @media (max-width: 460px) {
      width: 80%;
    }
  }
`;

export const StyledDivBotao = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;