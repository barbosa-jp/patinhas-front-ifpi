import styled from "styled-components";

export const StyledMain = styled.div`
  height: 100%;
  display: flex;
`;


export const StyledMenu = styled.div`
  background-color: var(--cor-roxo);
  width: 25vw;
  height: 100vh;
  padding: 32px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;

  @media (max-width: 980px) {
    width: fit-content;
    position: relative;
    padding: 0;
    height: 100%;

    .menu-div {
      gap: 4px;
    }
  }

  .menu-div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const StyledIcone = styled.img`
  height: 24px;

 @media (max-width: 980px) {
    height: 16px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;

  list-style: none;

  li {
    min-width: 70%;

    transition: all 200ms;

    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;

    padding: 8px 32px;

    border-radius: 32px 0 0 32px;

    color: var(--cor-branco);
    font-family: var(--fonte-paragrafo);
    font-size: 24px;
    font-weight: bold;

    cursor: pointer;

    @media (max-width: 980px) {
      font-size: 16px;
      padding: 4px 16px;
    }
  }

  .ativado {
    background-color: var(--cor-branco);

    color: var(--cor-roxo);
  }

  .logout {
    color: var(--cor-rosa);
  }
`;

export const StyledInfo = styled.div`
  h1 {
    font-size: 24px;
    
    @media (max-width: 980px) {
      font-size: 16px;
    }
  };

  p {
    font-size: 16px;
  };
`;

export const StyledP = styled.p`
  color: var(--cor-branco);

  font-size: 24px;
`;

export const StyledPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 8px;

  color: var(--cor-branco);
  font-family: var(--fonte-paragrafo);

  img {
    width: 64px;
    border-radius: 100%;

    @media (max-width: 980px) {
      width: 48px;
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  margin-left: 25vw;
  min-height: 100vh;

  padding: 32px;

  @media (max-width: 980px) {
    margin: 8vh 0;
  }
`;

export const StyledOpcoes = styled.ul`
  display: flex;
  
  li {
    padding: 8px 16px;
    text-align: center;
    list-style: none;

    font-size: 24px;
    font-family: var(--fonte-paragrafo);
    color: var(--cor-roxo);
    font-weight: bold;
    
    transition: all 200ms;
    cursor: pointer;

    @media (max-width: 980px) {
      font-size: 16px;
      padding: 4px 8px;
    }
  }

  .selecionado {
    border-bottom: 4px solid var(--cor-lilas);

    @media (max-width: 980px) {
      border-bottom: 2px solid var(--cor-lilas);
    }
  }
`;

export const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  padding: 16px 0;

  overflow-y: auto;

  @media (max-width: 980px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

    padding: 16px 0 128px 0;
  }

  .nada {
    color: var(--cor-roxo);
    font-family: var(--fonte-paragrafo);
    font-size: 24px;
    text-align: center;

    width: 100%;
  }
`;

export const StyledCarregando = styled.div`
  width: 100%;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
`;