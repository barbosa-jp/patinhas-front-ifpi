import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    color: var(--cor-roxo);
    font-family: var(--fonte-titulo);
    font-weight: 500;
  }
`;

export const StyledImg = styled.div`
  display: flex;
  height: 320px;
  width: 100%
`;