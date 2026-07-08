import {
  StyledTextarea,
} from './style.js';

import { useState } from 'react';

function Textarea({placeholder, ref, value = ''}) {
  const [texto, setTexto] = useState(value);

  return <StyledTextarea 
    name="descricao"
    placeholder={placeholder} 
    ref={ref} 
    value={texto}
    onChange={(e) => setTexto(e.target.value)}
    ></StyledTextarea>
}

export default Textarea;