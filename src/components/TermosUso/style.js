import styled from 'styled-components';

export const StyledDiv = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: row;

  font-size: 20px;
  font-family: var(--fonte-paragrafo);

  input {
    width: 16px;
    aspect-ratio: 1 / 1;
  }

  .termo {
    background: none;
    border: none;

    color: var(--cor-branco);
    font-size: 20px;
    text-decoration: underline;

    cursor: pointer;
  }

  .embed {
    position: absolute;

    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 50%);

    justify-content: center;
    align-items: center;

    cursor: pointer;

    embed {
      min-width: 300px;
    }
  }
`;

