import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 0 96px;

  @media (max-width: 950px) {
    padding: 0 32px;
  }

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const StyledCards = styled.div`
  padding: 32px 0 128px;
  margin: 0;

  width: 100%;

  display: grid;
  justify-content: center;
  gap: 32px;

  box-sizing: border-box;

  overflow-y: auto;

  grid-template-columns: repeat(auto-fill, minmax(300px, 320px));
  
  @media (max-width: 500px) {
    padding: 0;
    padding-bottom: 192px;
  }
`;

export const StyledCard = styled.div`
  height: 320px;
  width: 100%;

  background-color: var(--cor-roxo);
  border-radius: 24px;

  display: flex;
  flex-direction: column;

  overflow: hidden;


  cursor: pointer;

  .img {
    height: 65%;
    object-fit: cover;
    object-position: top;
  }
`;

export const StyledConteudo = styled.div`
  height: 35%;
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    font-size: 32px;
    font-family: var(--fonte-titulo);
    font-weight: 500;
    color: var(--cor-branco)
  }
`;