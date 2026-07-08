import {
  StyledMenu,
  StyledMenuBurguer,
  StyledFecharMenu,
  StyledRoot,
} from './style.js';

import { useState } from 'react';

export default function MenuBurguer({children}) {
  const [menuBurguer, setMenuBurguer] = useState(false);

  function modificarMenu() {
    setMenuBurguer(!menuBurguer);
  }

  return <StyledRoot>
    <StyledMenu className={menuBurguer ? 'ativar' : 'desativar'}>
      <StyledFecharMenu type='button' className="fechar-menu" onClick={modificarMenu}>
        <div></div>
        <div></div>
      </StyledFecharMenu>
      {children}
    </StyledMenu>
    <StyledMenuBurguer type='button' className="menu-hamburguer" onClick={modificarMenu}>
      <div></div>
      <div></div>
      <div></div>
    </StyledMenuBurguer>
  </StyledRoot>
}