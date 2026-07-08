import {
  StyledRoot,
  StyledCard,
  StyledIcone,
  StyledImg,
  StyledTexto
} from './style.js';

import IconeCorreto from '../../assets/icone-correto.svg';
import IconeErrado from '../../assets/icone-errado.svg';
import IconePatinha from '../../assets/patinha-lavanda.svg';
import { useState } from 'react';
import api from '../../services/api.js';

export default function CardAprovacao({ idSessao }) {
  const [tipo, setTipo] = useState('aguardando');

  if (tipo === 'aguardando') {
    verificarStatus(idSessao);
  }

  async function verificarStatus(idSessao) {
    try {
      const status = await api.get(`/verificar-status/${idSessao}`);
      console.log(status);
      
      const statusBanco = status.data.status;
      
      if (statusBanco === "APROVADA") {
        console.log("Pagamento confirmado pelo webhook!");
        setTipo('concluido');
        return;
      }
      
    } catch (err) {
      console.error("Erro na verificação:", err);
    }
  }

  const texto = (tipo) => {
    switch (tipo) {
      case 'concluido':
        return 'Doação Concluída'
      case 'cancelado':
        return 'Doação Cancelada';
      case 'aguardando':
        return 'Aguardando...';    
    }
  }

  const imagem = (tipo) => {
    switch (tipo) {
      case 'concluido':
        return IconeCorreto;
      case 'cancelado':
        return IconeErrado;
      case 'aguardando':
        return IconePatinha;    
    }
  }

  return (
    <StyledRoot>
      <StyledCard>
        <StyledIcone className={tipo}>
          <StyledImg src={imagem(tipo)} alt="ícone" />
          <div className={tipo}></div>
        </StyledIcone>
        <StyledTexto className={tipo}>{texto(tipo)}</StyledTexto>
      </StyledCard>
    </StyledRoot>
  );
}