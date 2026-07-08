import {
  StyledMain,
  StyledAbas,
  StyledAba,
  StyledConteudoAbas
} from './style.js';

import Header from '../../components/Header';
import PontosColeta from './PontosDeColeta';
import CardVaquinha from './CardVaquinha';
import PaginaTemplate from '../../components/PaginaTemplate';

import { useState } from 'react';

function Doacao() {
  const [aba, setAba] = useState('pontos');

  return (
    <PaginaTemplate tema='claro'>
      <Header paginaAtual='doacao'/>
      <StyledMain>
        <StyledAbas>
          <StyledAba type='button' className={`aba-um ${aba === 'pontos' && 'ativado'}`} onClick={() => setAba('pontos')}>
            Pontos de Coleta 
          </StyledAba>
          <StyledAba type='button' className={`aba-dois ${aba === 'vaquinha' && 'ativado'}`} onClick={() => setAba('vaquinha')}>
            Vaquinhas
          </StyledAba>
        </StyledAbas>
        <StyledConteudoAbas>
          {aba === 'pontos' ? <PontosColeta/> : <CardVaquinha/>}
        </StyledConteudoAbas>
      </StyledMain> 
    </PaginaTemplate>
  );
}

export default Doacao;