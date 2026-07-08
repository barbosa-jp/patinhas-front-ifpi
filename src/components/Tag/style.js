import styled from "styled-components";

export const StyledSpan = styled.span`
  padding: 8px 16px;
  width: fit-content;
  border-radius: 8px;
  
  font-family: var(--fonte-titulo);
 
  &.roxo {
    background-color: var(--cor-roxo);
    color: var(--cor-rosa);
  }

  &.verde {
    background-color: var(--cor-verde);
    color: var(--cor-roxo);
  }

  &.rosa {
    background-color: var(--cor-rosa);
    color: var(--cor-roxo);
  }
`;