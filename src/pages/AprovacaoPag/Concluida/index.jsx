import {
  StyledDiv,
  StyledImg,
  StyledH1,
  StyledP,
  StyledMain,
  StyledConteudo
} from '../style.js';

import PaginaTemplate from '../../../components/PaginaTemplate';
import BotaoVoltar from '../../../components/BotaoVoltar';
import { useNavigate } from 'react-router-dom';

import Imagem from '../../../assets/foto-cachorros-felizes.jpg';

export default function Concluida() {
  const navigate = useNavigate();

  return (
    <PaginaTemplate tema="claro">
      <BotaoVoltar tema="claro" onClick={() => navigate('/doacao')} />
      <StyledMain>
        <StyledDiv>
          <StyledImg src={Imagem} alt="cachorro"/>
          <StyledConteudo>
            <StyledH1>Doação Concluída</StyledH1>
            <StyledP>Em nome de todos os animais que ajudamos, nosso sincero agradecimento por sua generosa doação. Ela significa esperança e cuidado.</StyledP>
          </StyledConteudo>
        </StyledDiv>
      </StyledMain>
    </PaginaTemplate>
  );
}