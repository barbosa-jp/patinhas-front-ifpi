import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
`;

export const StyledForm = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-family: var(--fonte-titulo);
    font-size: 32px;
    color: var(--cor-roxo);
    font-weight: 500;
  }

  label {
    font-size: 20px;
    font-family: var(--fonte-paragrafo);
    color: var(--cor-roxo);
    font-weight: 700;
  }
  p {
    font-family: var(--fonte-paragrafo);  
    color: var(--cor-roxo);
    font-size: 20px;
    font-weight: 700;
  }
`;

export const StyledLinha = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  > * {
    flex: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;
export const StyledLinhaHorario = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: auto;
  flex-wrap: wrap;

  > * {
    flex: 0 0 auto;
  }

  input {
    width: 80px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const StyledCheckboxGrupo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 8px;
  

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-family: var(--fonte-paragrafo);
  font-weight: 400;
  color: var(--cor-roxo);
  cursor: pointer;
  
  p {
    font-family: var(--fonte-paragrafo);
    font-weight: 400;
    font-size: 20px;
  }

  input {
    width: 24px;
    height: 24px;
    appearance: none;
    border: 4px solid var(--cor-roxo);
    cursor: pointer;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input:checked {
    background-color: var(--cor-roxo);
  }

  input:checked::after {
    content: "✓";
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;