import {
  StyledRoot,
  StyledMenu,
  StyledMenuBurguer,
  StyledFecharMenu,
  StyledUl,
  StyledLi,
  StyledButton
} from './style.js';

import Botao from '../../Botao';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MenuHamburguer({paginaAtual, cookie, paginas}) {
  const [menu, setMenu] = useState(false);

  function modificarMenu() {
    setMenu(!menu);
  }

  return (
    <StyledRoot>
      <StyledMenu className={menu ? 'ativar' : 'desativar'}>
        <StyledFecharMenu type='button' className="fechar-menu" onClick={modificarMenu}>
          <div></div>
          <div></div>
        </StyledFecharMenu>
        <StyledUl className='ul-menu'>
          {
            Object.keys(paginas).map((pagina) => {
              return <StyledLi key={pagina}>
                <Link className={paginaAtual === pagina ? 'link selecionado' : 'link'} to={`/${pagina}`} >{paginas[pagina]}</Link>
              </StyledLi>
            })
          }
        </StyledUl>
      </StyledMenu>
      <StyledMenuBurguer type='button' className="menu-hamburguer" onClick={modificarMenu}>
        <div></div>
        <div></div>
        <div></div>
      </StyledMenuBurguer>
      <Link to={cookie === undefined ? '/login' : '/perfil'} className='link'>
        <StyledButton>
          <Botao tema='rosa'>{cookie === undefined ? 'Login' : 'Perfil'}</Botao>
        </StyledButton>
      </Link>
    </StyledRoot>
  )
}