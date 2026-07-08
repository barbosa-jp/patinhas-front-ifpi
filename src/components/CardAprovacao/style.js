import styled from "styled-components";

export const StyledRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled.div`
  width: 500px;
  height: 350px;
  background-color: var(--cor-branco);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 50px;

  .concluido {
    color: var(--cor-verde);
    border-color: var(--cor-verde);
  }

  .cancelado {
    color: var(--cor-vermelho);
    border-color: var(--cor-vermelho);
  }

  .aguardando {
    color: var(--cor-lilas);
    border-color: var(--cor-lilas);
  }
`;

export const StyledIcone = styled.div`
  position: relative;

  display: flex;
  height: 150px;
  width: 150px;
  
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border-width: 5px;
  border-style: solid;

  .aguardando {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  .aguardando::before {
    content: "";
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background:
      conic-gradient(
        var(--cor-roxo) 0deg 90deg,
        transparent 90deg 360deg
      );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 5px),
      white calc(100% - 4px)
    );

    animation: Girar infinite linear 1s;
  }
`

export const StyledImg = styled.img`
  width: 50%;
`;

export const StyledTexto = styled.p`
  font-size: 25px;
  font-family: var(--fonte-paragrafo);
  font-weight: 500;
`;