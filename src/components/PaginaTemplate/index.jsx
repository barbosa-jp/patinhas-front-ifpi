import { StyledDiv } from './style.js';
import FundoPatinhas from '../../assets/fundo-patinhas.png';

export default function PaginaTemplate({tema, scroll, children}) {
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return(
    <StyledDiv className={`tema-${tema} ${!scroll || 'scroll'}`}>
      {children}
    </StyledDiv>
  )
}