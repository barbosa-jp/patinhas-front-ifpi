import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px 0;

  &.cima {
    transform: translate(-100px);
  }
`

export const StyledNav = styled.nav`
  height: 100%;
  width: 40%;
`

export const StyledUl = styled.ul`
  background-color: var(--cor-roxo);
  
  margin: 0;
  padding: 16px;

  width: 100%;
  height: 100%;

  border-radius: 50px;

  display: flex;
  justify-content: space-around;

  list-style: none;

  font-family: var(--fonte-paragrafo);

  .selecionado {
    color: var(--cor-rosa);
  }
`
export const StyledLi = styled.li`
  width: 100%;
  font-weight: bold;
  text-align: center;
  
  cursor: pointer;

  color: var(--cor-branco);
`;

export const StyledImg = styled.img`
  height: 64px;
  border-radius: 50%;
`;

export const StyledButton = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  border: none;
  background: none;
`