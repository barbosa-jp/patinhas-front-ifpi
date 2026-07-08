import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  
  header {
    width: 100%;
    margin-bottom: 16px;

    display: flex;
    justify-content: space-between;
  }

  main {
    width: 100%;
  }
`;

export const StyledBotoes = styled.div`
  width: fit-content;

  display: flex;
  gap: 16px;
  
  @media (max-width: 480px) {
    width: auto;
    gap: 8px;
  }

  button {
    background: var(--cor-roxo);
    border: none;
    border-radius: 50%;
    
    width: 48px;
    aspect-ratio: 1 / 1;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: all 0.3s ease;

    @media (max-width: 960px) {
      width: 32px;
      height: 32px;
      aspect-ratio: 1 / 1;
      padding: 8px;
    }
  }

  img {
    width: 80%;
    aspect-ratio: 1 / 1;
  }
`;