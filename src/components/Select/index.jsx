import {
  StyledDiv,
  StyledImg,
  StyledSelect
} from './style.js';

import fotoPatinhaBranco from '../../assets/patinha-branco.svg'; 
import fotoPatinhaRoxo from '../../assets/patinha-roxo.svg'; 
import { useState } from 'react';

function Select({ opcoes, placeholder, ref, tema, value = ''}) {
  const [desativado, setDesativado] = useState(false);

  return (
    <StyledDiv style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
      <StyledImg src={tema === 'claro' ? fotoPatinhaRoxo : fotoPatinhaBranco} alt="foto patinha"/>
      <StyledSelect ref={ref} className={tema} onChange={() => setDesativado(true)}>
        {
          desativado || value !== ''
          ?
          <option value={placeholder} className='placeholder' disabled>{placeholder}</option>
          :
          <option value={placeholder} className='placeholder' selected>{placeholder}</option>
        }
        {
          opcoes.map(opcao => {
            if (opcao.value === value) {
              return <option key={opcao.value} value={opcao.value} selected>{opcao.opcao}</option>
            }
            return <option key={opcao.value} value={opcao.value}>{opcao.opcao}</option>
          })
        }
      </StyledSelect>
    </StyledDiv>
  )
}

export default Select;