import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  height: 100%;
  min-height: 150px;
  width: 100%;

  border: 2px solid var(--cor-roxo);
  border-radius: 16px;
  padding: 16px;
  background: none;
  
  font-family: var(--fonte-paragrafo);
  color: var(--cor-roxo);
  font-size: 16px;

  transition: all 500ms;

  &::placeholder {
    color: var(--cor-roxo);
    opacity: 75%;
  }

  &:focus {
    outline-color: var(--cor-lilas);
  }
`;