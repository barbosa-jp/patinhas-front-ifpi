import {
  FiltroWrapper,
  BotoesSection,
  Botao,
} from './style.js';

import { Link } from 'react-router-dom';

import Busca from '../Busca';

import IconeFiltro from '../../assets/icone-filtro.svg';
import IconeEditar from '../../assets/icone-lapis.png';
import Cookies from 'js-cookie';

const FiltroBusca = ({ buscar, filtrar, rota, pontosColeta = ''}) => {
  const token = Cookies.get('token-login');
  const cargo = localStorage.getItem('user-cargo');

  const verificacao = pontosColeta !== '' ? cargo === 'ADMIN' : cargo !== 'DOADOR';

  return (
    <FiltroWrapper>
      <Busca onChange={buscar}></Busca>
      <BotoesSection>
        {
          token && verificacao &&
          <Link to={rota}>
            <Botao>
              <img src={IconeEditar} alt="Editar"/>
            </Botao>
          </Link> 
        }    
        {/* <Botao>
          <img src={IconeFiltro} alt="Filtrar"/>
        </Botao> */}
      </BotoesSection>
    </FiltroWrapper>
  );
};

export default FiltroBusca;