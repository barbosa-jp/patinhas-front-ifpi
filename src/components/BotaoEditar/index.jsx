import {
  Botao
} from './style.js';

import IconeEditar from '../../assets/icone-editar.svg';
import { useNavigate } from 'react-router';

export default function BotaoEditar({pagina, infos}) {
  const navegar = useNavigate();

  function irPaginaEdicao() {
    navegar(`../editar-${pagina}`, {state: { infos: infos }});
  }
  
  return <Botao type="button" onClick={irPaginaEdicao}>
    <img src={IconeEditar} alt="botao editar" />
  </Botao>
}