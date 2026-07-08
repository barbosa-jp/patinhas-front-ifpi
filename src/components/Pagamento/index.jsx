import {
  StyledFundo,
  StyledCard,
  StyledImg,
  StyledConteudo,
  StyledH1,
  StyledDescricao,
  StyledBotoes
} from './style.js';

import BotaoVoltar from '../BotaoVoltar';
import Meta from '../Meta/index.jsx';
import InputText from '../InputText';
import Botao from '../Botao'; 
import BotaoEditar from '../BotaoEditar/index.jsx';
import BotaoDeletar from '../BotaoDeletar/index.jsx';

import api from '../../services/api.js';
import Cookies from 'js-cookie';

import { useRef } from 'react';

export default function Pagamento({animal, ativado, voltar, doar}) {
  const valor = useRef();
  const cookie = Cookies.get('token-login');

  async function comecarDoacao() {
    try {
      if (cookie === undefined) {
        alert('Para realizar uma doação, é preciso fazer o login na sua conta');
        window.location.href = '/login';
      }

      const response = await api.doacao.post(
        `/vaquinhas/${animal.id}`, 
        {qtdDoacao: parseFloat(valor.current.value)},
        {headers: {"Authorization": `Bearer ${cookie}`}}
      );
    
      window.location.href = response.data.checkout_url;
      voltar();
      doar(response.data.session_id);
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <StyledFundo style={{display: `${ativado ? 'flex' : 'none'}`}}>
      <BotaoVoltar tema='escuro' onClick={voltar}></BotaoVoltar>
      <StyledCard>
        <StyledImg src={animal.imagem} alt={animal.imagem}/>
        <StyledConteudo action={comecarDoacao}>
          <StyledBotoes>
          {
            (Cookies.get('usuario') === animal.cuidador_id || Cookies.get('usuario-cargo') === 'ADMIN') &&
            <BotaoEditar pagina='vaquinha' infos={animal}/>
          }
          {
            Cookies.get('usuario-cargo') === 'ADMIN' &&
            <BotaoDeletar pagina='vaquinha' id={animal.id}/>
          }

          </StyledBotoes>
          <StyledH1>{animal.titulo}</StyledH1>
          <StyledDescricao>{animal.descricao}</StyledDescricao>
          <Meta meta={animal.meta} valorAtual={animal.valor_arrecadado}></Meta>
          <InputText placeholder='Digite o valor' tema='claro' type='number' ref={valor} reiniciar={animal.id}></InputText>
          <Botao tema='claro'>Doar</Botao>  
        </StyledConteudo>
      </StyledCard>
    </StyledFundo>
  )
}