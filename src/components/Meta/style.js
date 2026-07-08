import styled from "styled-components";

export const StyledMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledDescricao = styled.p`
  margin: 0;
  padding: 0;

  font-family: var(--fonte-paragrafo);
  color: var(--cor-lilas);
  font-size: 16px;

  .verde {
    color: var(--cor-verde);
  }
`;

export const StyledGraficos = styled.div`
  position: relative;
  .meta {
    background-color: var(--cor-lilas);
    width: 100%;
  };
  .valor-atual {
    background-color: var(--cor-verde);
    z-index: 1;
  };
`;

export const StyledGrafico = styled.div`
  position: absolute;

  overflow: hidden;
  border-radius: 50px;

  height: 4px;
  max-width: 100%;
`;