import {
  StyledDiv,
  StyledImg,
  StyledH1,
  StyledP,
  StyledMain,
  StyledConteudo
} from '../style.js';

import PaginaTemplate from '../../../components/PaginaTemplate/index.jsx';
import BotaoVoltar from '../../../components/BotaoVoltar/index.jsx';
import { useNavigate } from 'react-router-dom';

import Imagem from '../../../assets/foto-cachorros-felizes.jpg';

export default function Cancelada() {
  const navigate = useNavigate();

  return (
    <PaginaTemplate tema="claro">
      <BotaoVoltar tema="claro" onClick={() => navigate('/doacao')} />
      <StyledMain>
        <StyledDiv>
          <StyledImg src={Imagem} alt="cachorro"/>
          <StyledConteudo>
            <StyledH1>Doação Cancelada</StyledH1>
            <StyledP>Agradecemos seu interesse em apoiar nossa causa animal. Registramos que a tentativa de doação foi cancelada. Caso tenha enfrentado alguma dificuldade técnica ou tenha dúvidas, estamos à disposição para ajudar. Obrigado por considerar fazer a diferença.</StyledP>
          </StyledConteudo>
        </StyledDiv>
      </StyledMain>
    </PaginaTemplate>
  );
}