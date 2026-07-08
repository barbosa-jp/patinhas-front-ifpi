import {
  StyledCards,
  StyledCard,
  StyledConteudo,
  StyledDiv
} from './style.js';

import Meta from '../../../components/Meta';
import api from '../../../services/api.js';
import { useState } from 'react';
import Pagamento from '../../../components/Pagamento';
import CardAprovacao from '../../../components/CardAprovacao';
import FiltroBusca from '../../../components/FiltroBusca';

export default function CardVaquinha() {
  const [vaquinhas, setVaquinhas] = useState([]);
  const [pagamento, setPagamento] = useState(false);
  const [selecao, setSelecao] = useState('');
  const [doacao, setDoacao] = useState('');
  const [busca, setBusca] = useState('');

  async function getVaquinhas() {
    const response = await api.doacao.get('/vaquinhas');
    setVaquinhas(response.data);
  }

  function desativar() {
    setPagamento(false);
  }

  function mostrarVaquinhas() {
    if (vaquinhas.length === 0) {
      getVaquinhas();
    } else {
      const vaquinhaFiltro = handleBusca();
      return (
        vaquinhaFiltro.map(vaquinha => 
          <StyledCard key={vaquinha.id} onClick={() => {
              if (!pagamento && doacao === '') {
                setPagamento(true)
                setSelecao(vaquinha)
              } 
            }}>
            { doacao !== '' && <CardAprovacao idSessao={doacao}></CardAprovacao>}
            <Pagamento animal={selecao} ativado={pagamento} voltar={desativar} doar={doar}/>
            <img src={vaquinha.imagem} alt="foto animal" className='img'/>
            <StyledConteudo>
              <h1>{vaquinha.titulo}</h1>
              <Meta meta={vaquinha.meta} valorAtual={vaquinha.valor_arrecadado}></Meta>
            </StyledConteudo>
          </StyledCard>
        )
      )
    }
  }

  function doar(idSessao) {
    setDoacao(idSessao);
  }

    function handleBusca() {
      if (busca !== '') {
      return filtrar();
      } else {
      return vaquinhas;
      }
    };
  
  function filtrar() {
      const termoMinusculo = busca.toLowerCase();
      const filtrados = vaquinhas.filter(atributo =>
          atributo.titulo.toLowerCase().includes(termoMinusculo) ||
          atributo.meta.toString().includes(termoMinusculo)         
      );
      return filtrados;
  }

  return (
    <StyledDiv>
      <FiltroBusca
          buscar={setBusca}
          valorBusca={busca}
          rota={'/cadastro-vaquinha'}
      />
      <StyledCards>
        {mostrarVaquinhas()}
      </StyledCards>
    </StyledDiv>
  );
}