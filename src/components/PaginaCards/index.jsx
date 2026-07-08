import {
  StyledDiv,
  StyledBotoes,
} from './style.js';

import Busca from "../Busca";

import IconeFiltro from '../../assets/icone-filtro.svg';
import IconeEditar from '../../assets/icone-lapis.png';

import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export default function PaginaCards({
  children,
  rotaAdicionar,
  perfilAdicionar,
  setCards, 
  lista,
  filtro = []
}) {  
  const token = Cookies.get('token-login');
  const cargo = localStorage.getItem('user-cargo');
  setCards(lista)
  
  function filtrar(valor) {
    const termoMinusculo = valor.toLowerCase();
    const filtrados = lista.filter(e => {
      const atributos = filtro.map((atributo) => {
        const card = e[atributo]
        return card.toString().toLowerCase().includes(termoMinusculo)
      });
  
      return atributos.includes(true);
    });
    
    setCards(filtrados)
  }

  return <StyledDiv>
    <header>
      <Busca 
        onChange={filtrar}
      />
      <StyledBotoes>
        <button type="button">
           <img src={IconeFiltro} alt="Filtrar"/>
        </button>
        {
          perfilAdicionar.includes(cargo) &&
          <button type="button">
            <Link to={rotaAdicionar}>
              <img src={IconeEditar} alt="Adicionar"/>
            </Link>
          </button>
        }
      </StyledBotoes>
    </header>
    <main>
      {children}
    </main>
  </StyledDiv>
}