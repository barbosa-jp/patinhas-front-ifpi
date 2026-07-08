import { 
  StyledBotaoVoltar,
  StyledImgPatinha
} from './style';

import fotoPatinhaRoxo from '../../assets/patinha-roxo.svg';
import fotoPatinhaBranco from '../../assets/patinha-branco.svg';

function BotaoVoltar({tema, onClick = () => window.history.back(), alinhar}) {
  return (
    <StyledBotaoVoltar 
      type='button' 
      style={{
        backgroundColor: tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)', 
        color: tema === 'claro' ? 'var(--cor-branco)' : 'var(--cor-roxo)',
        justifySelf: alinhar === 'esquerda' ? 'start' : 'end',
      }}
      onClick={onClick}
      >
      <StyledImgPatinha 
        src={tema === 'claro' ? fotoPatinhaBranco : fotoPatinhaRoxo} 
        alt="ícone patinha"
      />
      Voltar
    </StyledBotaoVoltar>
  )
}

export default BotaoVoltar;