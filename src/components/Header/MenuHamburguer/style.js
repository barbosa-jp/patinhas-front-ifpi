import styled from 'styled-components';

export const StyledRoot = styled.div`
  display: flex;
  
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

export const StyledMenu = styled.div`
  position: absolute;
  padding: 32px;
  left: 0;
  top: 0;
  z-index: 2;

  background-color: var(--cor-roxo);

  border-bottom-right-radius: 32px;

  transition: all 200ms ease-in-out;
`;

export const StyledMenuBurguer = styled.button`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  cursor: pointer;

  border: none;

  & div {
    width: 40px;
    height: 6px;

    background-color: var(--cor-rosa);
    border: var(--cor-roxo);
    border-radius: 32px;
  }
`;

export const StyledFecharMenu = styled.button`
  background: none;
  position: relative;
  margin-bottom: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  aspect-ratio: 1 / 1;
  border: none;

  cursor: pointer;

  & div {
    position: absolute;
    width: 32px;
    height: 6px;

    background-color: var(--cor-rosa);
  }

  & div:first-child {
    transform: rotate(45deg);
  }

  & div:last-child {
    transform: rotate(-45deg);
  }
`;

export const StyledUl = styled.ul`
  font-size: 24px;
  color: var(--cor-branco);
  font-family: var(--fonte-paragrafo);

  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;

  padding: 0;

  .selecionado {
    color: var(--cor-rosa)
  }
`;

export const StyledLi = styled.li`
  color: var(--cor-branco);

  .selecionado {
    color: var(--cor-rosa)
  }
`;

export const StyledButton = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  border: none;
  background: none;
`;