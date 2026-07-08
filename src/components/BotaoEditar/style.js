import styled from "styled-components";

export const Botao = styled.button`
  background-color: var(--cor-roxo);
  padding: 8px;
  border-radius: 100%;
  max-width: 48px;
  aspect-ratio: 1 / 1;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  cursor: pointer;

  img {
    width: 24px;
    aspect-ratio: 1 / 1;
  }
`;