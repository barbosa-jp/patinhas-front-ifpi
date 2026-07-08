import {
  StyledBotoes,
  StyledCard,
  StyledCardInfo,
  StyledDados,
  StyledImagem,
} from './style.js';

import Cookies from 'js-cookie';
import { useState } from 'react';

import Loading from '../../../components/Loading';

export default function Card({key, cargo, card, opcaoMenu, api, buscarCards}) {
  const [botaoSelecionado, setBotaoSelecionado] = useState(null);
  const [pending, setPending] = useState(false);
  const cookie = Cookies.get('token-login');
  
  function analisarCard(tipo) {
    setBotaoSelecionado(tipo);
    setPending(true)
    postDadoAnalisado(tipo);
  }

  async function postDadoAnalisado(tipo) {
    try {      
			await api.admin.patch(
        `/${tipo}/${card.id}`,
        {
          "tipoDado": card.tipo_dado,
        },
        {headers: {"Authorization": `Bearer ${cookie}`}} 
      );
      await buscarCards(cookie);
      setPending(false);
		} catch (error) {
      console.log(error.message);
		}
  }

  function botoesCard(cargo, card){
    switch (cargo) {
      case 'ADMIN':
        if (card.status_admin === 'PENDENTE' || botaoSelecionado === 'editar' || pending) {
          return <>
              <button 
                type='button' 
                onClick={() => analisarCard('aprovado')} 
                className='aprovado'
                disabled={pending}
              >
                {pending && botaoSelecionado === 'aprovado' ? <Loading tema={'escuro'}/> : 'Aprovar'}
              </button>
              <button
                type='button'
                onClick={() => analisarCard('rejeitado')} 
                className='rejeitado'
                disabled={pending}
              >
                {pending && botaoSelecionado === 'rejeitado' ? <Loading tema={'escuro'}/> : 'Rejeitar'}
              </button>
          </>
        }

        return <button
          type='button'
          onClick={() => setBotaoSelecionado('editar')} 
          className='editar'
          disabled={pending}
        >
          {pending && botaoSelecionado === card.status_admin.toLowerCase() ? <Loading tema={'escuro'}/> : 'Editar'}
        </button>

      case 'CUIDADOR':
        return <button type='button' className={`${card.status_pag === undefined ? card.status_admin.toLowerCase() : card.status_pag.toLowerCase()} ${cargo.toLowerCase()}`}>{card.status_admin[0] + card.status_admin.toLowerCase().substring(1)}</button>
  
      case 'DOADOR':
        return <button type='button' className={`${card.status_pag.toLowerCase()} ${cargo.toLowerCase()}`}>{card.status_pag[0] + card.status_pag.toLowerCase().substring(1)}</button>
    }
  }

  return <StyledCard key={key}>
    <StyledCardInfo>
      {
        card.imagem !== undefined ?
        <StyledImagem className='imagem' background={card.imagem}>
        </StyledImagem>
        :
        '' 
      }
      <StyledDados className={opcaoMenu === 'Cuidadores' ? 'cuidador' : ''}>
        {
          Object.keys(card.dados).map(chave => {
            if (chave === 'nome_completo' || chave ===  'nome') {
              return <h1 key={chave}>{card.dados[chave]}</h1>
            };

            return <p key={chave}>
              <strong>{chave.replace('_', ' ').toUpperCase()}:</strong> {card.dados[chave]}
            </p>
          }
        )}  
        {
          card.status_admin !== 'PENDENTE' && <p><strong>STATUS:</strong> {card.status_admin}</p>
        }
      </StyledDados>
    </StyledCardInfo>
    <StyledBotoes>
      {botoesCard(cargo, card)}
    </StyledBotoes>
            
    </StyledCard>
}