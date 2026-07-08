import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 64px;
  padding: 32px 64px;

  @media (max-width: 850px) {
    padding: 16px 32px;
  }

  @media (max-width: 550px) {
    padding: 16px;
  }
`;

export const StyledGridContainer = styled.div`
  height: 75vh;
  padding: 16px 0;
  overflow-y: auto;
`;

export const GridCards = styled.div`
  width: 100%;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 248px);
  place-items: center;
  grid-gap: 32px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 216px);
  }

  @media (max-width: 1040px) {
    grid-template-columns: repeat(3, 200px);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 200px);
  }

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 0;
    gap: 16px;
  }
`;

export const MensagemVazia = styled.div`
  text-align: center;
  color: #473469;
  font-size: 18px;
  grid-column: 1 / -1;
  padding: 40px;
`;

export const StyledCarregando = styled.div`
  width: auto;
  height: 24px;

  margin: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;