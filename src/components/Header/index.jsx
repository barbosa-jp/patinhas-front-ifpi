import StyledHeader from './style.js'

import Menu from './Menu';
import MenuHamburguer from './MenuHamburguer';
import { useState } from 'react';

import Cookies from 'js-cookie';

function Header({paginaAtual}) {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);
  window.addEventListener('resize', () => {setLarguraTela(window.innerWidth)})

  const cookie = Cookies.get('token-login');

  const paginas = {
    inicio: 'Início',
    doacao: 'Doação',
    adocao: 'Adoção',
    posts: 'Posts',
    sobre: 'Sobre'
  };

  return (
    <StyledHeader>
      { 
        larguraTela > 950 ? 
        <Menu paginaAtual={paginaAtual} paginas={paginas} cookie={cookie}/> : 
        <MenuHamburguer paginaAtual={paginaAtual} paginas={paginas} cookie={cookie}/>
      }
    </StyledHeader>
  )
}

export default Header;