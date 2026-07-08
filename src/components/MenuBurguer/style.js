import styled from "styled-components";

export const StyledRoot = styled.div`
  display: flex;
  position: absolute;
  
  justify-content: space-between;
  padding: 32px;

  & .desativar {
    opacity: 0;
    z-index: -1;
  };

  & .ativar {
    opacity: 100%;
  };
`;

export const  StyledMenu =  styled.div`
  position: absolute;
  padding: 4vh 5vw;
  left: 0;
  top: 0;
  z-index: 2;
  width: fit-content;
  height: fit-content;


  background-color: var(--cor-roxo);

  border-bottom-right-radius: 32px;

  transition: all 200ms ease-in-out;
`;

export const StyledMenuBurguer = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 4vh;
  left: 6vw;

  height: 48px;
  aspect-ratio: 1 / 1;

  cursor: pointer;
  border: none;

  @media (max-width: 980px) {
    height: 32px;
  }

  & div {
    width: 100%;
    height: 6px;

    background-color: var(--cor-roxo);

    @media (max-width: 980px) {
      height: 4px;
    }
  }
`;

export const StyledFecharMenu = styled.button`
  background: none;
  position: relative;
  margin-bottom: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  aspect-ratio: 1 / 1;
  border: none;

  @media (max-width: 980px) {
    width: 32px;
  }

  cursor: pointer;

  & div {
    position: absolute;
    width: 48px;
    height: 6px;

    @media (max-width: 980px) {
      width: 32px;
    }

    background-color: var(--cor-rosa);
  }

  & div:first-child {
    transform: rotate(45deg);
  }

  & div:last-child {
    transform: rotate(-45deg);
  }
`;
