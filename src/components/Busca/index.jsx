import {
  InputContainer,
  SearchInput,
  Icone,
} from './style.js';

import IconeX from '../../assets/icone-x.svg';
import IconeLupa from '../../assets/icone-lupa.svg';

const Busca = ({onChange}) => {
  return (
    <InputContainer>
        <Icone src={IconeLupa} alt="ícone lupa"/>
        <SearchInput
          type="text"
          placeholder='Buscar...'
          onChange={(e) => onChange(e.target.value)}
        />
        <button type='reset' onClick={() => onChange('')}>
          <Icone src={IconeX} alt="ícone apagar"/>
        </button>
    </InputContainer>
  );
};

export default Busca;