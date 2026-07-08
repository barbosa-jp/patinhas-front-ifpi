import { 
  StyledMenu,
  StyledButton,
  StyledNav,
  StyledUl,
  StyledImg,
  StyledLi
} from './style.js';

import { Link } from 'react-router-dom';

import Logo from '../../../assets/icone-logo.png'

import Botao from '../../Botao'; 

export default function Menu({paginaAtual, cookie, paginas}) {
  return (
    <StyledMenu>
      <Link to='/' className='link'>
        <StyledButton>
          <StyledImg src={Logo} alt="logo" />
        </StyledButton>
      </Link>
      <StyledNav>
        <StyledUl className='ul'>
          {
            Object.keys(paginas).map((pagina) => {
              return <StyledLi key={pagina}>
                <Link className={paginaAtual === pagina ? 'link selecionado' : 'link'} to={`/${pagina}`}>{paginas[pagina]}</Link>
              </StyledLi>
            })
          }
        </StyledUl>
      </StyledNav>
      <Link to={cookie === undefined ? '/login' : '/perfil'} className='link'>
        <StyledButton>
          <Botao tema='rosa'>{cookie === undefined ? 'Login' : 'Perfil'}</Botao> 
        </StyledButton>
      </Link>
    </StyledMenu>
  );
};