import styled from "styled-components";

export const StyledMain = styled.main`
  padding-top: 100px;
`;

export const StyledAbas = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;

  .ativado {
    box-shadow: 0 2px 0 var(--cor-roxo);
  }
`;

export const StyledAba = styled.button`
  transition: all 300ms;
  
  width: 100%;
  padding: 8px 0;
  
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: var(--cor-roxo);
  font-size: 16px;

  font-weight: bold;
  font-family: var(--fonte-paragrafo);

  cursor: pointer;
`; 

export const StyledConteudoAbas = styled.div`
  height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (max-width: 940px) {
    padding: 20px 32px;
  }
  
  @media (max-width: 500px) {
    padding: 0 24px;
  }
`;