import styled from 'styled-components';

export const StyledH1 = styled.div`
  font-family: var(--fonte-titulo);
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  color: var(--cor-roxo);
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 16px) calc(50% - 16px);
  grid-template-rows: 48px 48px 48px;
  grid-column-gap: 32px;
  grid-row-gap: 16px;

  @media (max-width: 940px) {
    grid-template-columns: 100%;
    grid-column-gap: 16px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 32px;

  height: 200px;

  @media (max-width: 940px) {
    flex-direction: column;
    height: fit-content;
    gap: 16px;
  }
`;