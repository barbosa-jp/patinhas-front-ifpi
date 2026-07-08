import styled from 'styled-components';

export const StyledTitulo = styled.h1`
  color: var(--cor-roxo);
  font-family: var(--fonte-titulo);
  font-weight: 500;
`;

export const StyledMain = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: stretch;
`;

export const StyledDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;

export const StyledImg = styled.div`
  display: flex;
  height: 320px;
  width: 30%;
`;