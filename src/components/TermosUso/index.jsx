import { StyledDiv } from './style.js';

import Termo from '../../assets/docs/termo-uso.pdf';

import { useState } from 'react';

function TermosUso({ref}) {
  const [mostrarPDF, setMostrarPDF] = useState(false);

  return <StyledDiv>
    <p>
      <input type='checkbox' ref={ref}/> Você concorda com os <button type='button' onClick={() => setMostrarPDF(true)} className='termo'>Termos de Uso</button>
    </p>
    <button type='button' className='embed' style={{display: mostrarPDF ? 'flex' : 'none'}} onClick={() => setMostrarPDF(false)}>
      <embed src={Termo} type="application/pdf" width="50%" height="70%"/>
    </button>
  </StyledDiv>
}

export default TermosUso;