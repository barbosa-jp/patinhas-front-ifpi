import styled from 'styled-components';
import FundoPatinhas from '../../assets/fundo-patinhas.png';
import FundoTablet from '../../assets/fundo-patinhas-tablet.png';
import FundoPhone from '../../assets/fundo-patinhas-phone.png';

export const StyledDiv = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  max-width: 100vw;

  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;

  background-color: var(--cor-roxo);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  
  &.tema-claro {
    background-image: url(${FundoPatinhas});
    background-color: var(--cor-branco);

    @media (max-width: 780px) {
      background-image: url(${FundoTablet});
    }

    @media (max-width: 490px) {
      background-image: url(${FundoTablet});
    }
  }

  &.scroll {
    overflow-y: auto;
    position: relative;
  }
`;