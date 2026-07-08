import { useFormStatus } from 'react-dom';

import StyledBotao from './style.js';
import Loading from '../Loading/index.jsx';

function Botao({children, onClick, type, tema}) {
  const { pending } = useFormStatus();

  return (
    <StyledBotao 
      onClick={onClick} 
      type={type} 
      style={{
        backgroundColor: `var(--cor-${tema === 'claro' ? 'roxo' : tema === 'rosa' ? 'rosa' : 'branco'})`, 
        color: `var(--cor-${tema === 'escuro' ? 'roxo' : tema === 'rosa' ? 'roxo' : 'branco'}`
      }}
      disabled={pending}
    >
      {pending ? <Loading tema={tema}/> : children}
    </StyledBotao>
  )
}

export default Botao;