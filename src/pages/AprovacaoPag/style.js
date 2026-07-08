import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  margin: auto;
  display: flex;
  gap: 20px;
  color: var(--cor-roxo);

  width: 50vw;
`;

export const StyledImg = styled.img`
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
  width: 50vh;
  height: 50vh;
`;

export const StyledConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  text-align: justify;
`;

export const StyledH1 = styled.h1`
  font-family: var(--fonte-titulo);
  font-weight: 500;
  font-size: 45px;
`;

export const StyledP = styled.p`
  font-family: var(--fonte-paragrafo);
  font-size: 25px;
`;