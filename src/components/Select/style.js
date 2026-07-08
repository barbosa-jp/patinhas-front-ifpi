import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 4px;

  .claro {
    color: var(--cor-roxo);
  }

  .escuro {
    color: var(--cor-branco)
  }

  @media ((max-width: 400px) or (max-height: 750px)) and (max-aspect-ratio: 1/1) {
    padding: 8px;
    gap: 2px;
  }
`;

export const StyledImg = styled.img`
  width: 24px;
`;

export const StyledSelect = styled.select`
  background: none;
  
  width: 100%;

  outline: none;
  border: none;

  font-size: 20px;
  font-family: var(--fonte-paragrafo);

  option {
    color: var(--cor-roxo);
  }

  option:disabled {
    color: var(--cor-lilas);
  }

  @media ((max-width: 400px) or (max-height: 750px)) and (max-aspect-ratio: 1/1) {
    font-size: 16px;
  }
`;