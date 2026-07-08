import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  height: 100%;

  aspect-ratio: 1 / 1;
  
  .aguardando {
    aspect-ratio: 1 / 1;
    height: 100%;
  }

  border-radius: 100%;

  .aguardando::before {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;

    animation: Girar infinite linear 1s;
  }

  .claro::before {
    background:
      conic-gradient(
        var(--cor-branco) 0deg 180deg,
        transparent 180deg 360deg
      );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 5px),
      white calc(100% - 4px)
    );
  }

  .escuro::before {
    background:
      conic-gradient(
        var(--cor-roxo) 0deg 180deg,
        transparent 180deg 360deg
      );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 5px),
      white calc(100% - 4px)
    );
  }
`;

export default StyledDiv;