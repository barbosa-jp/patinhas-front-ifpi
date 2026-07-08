import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  
  .input-imagem {
    display: none;
  }
`;

export const StyledInputImage = styled.label`
  width: 100%;
  min-height: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px dashed var(--cor-roxo);
  border-radius: 16px;
  cursor: pointer;

  color: var(--cor-roxo);

  .icone {
    aspect-ratio: 1 / 1;
    width: 64px;
  }

  p {
    font-size: 16px;
    font-family: var(--fonte-paragrafo);
    padding: 0 32px;
    text-align: center;
  }
`;

export const StyledImgSelecionda = styled.img`
  max-height: 100%;
  max-width: 100%;
`;