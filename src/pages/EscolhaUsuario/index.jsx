import {
  StyledH1,
  StyledMain,
  StyledDiv,
  StyledButton,
  StyledH2,
  StyledP,
  StyledImg,
  StyledBotoes,
  StyledDivImg
} from './style.js';

import { Link } from 'react-router-dom';

import BotaoVoltar from '../../components/BotaoVoltar';
import PaginaTemplate from '../../components/PaginaTemplate';

import FotoGato from '../../assets/escolha-gato.png';
import FotoCao from '../../assets/escolha-cao.png';
import FundoCuidador from '../../assets/fundo-patinhas-branco.svg';
import FundoDoador from '../../assets/fundo-patinhas-rosa.svg';

function EscolhaUsuario() {
  const tema = 'escuro';

  const botoes = [
    {
      para: '/cadastro-usuario/doador',
      imagem: FundoDoador,
      titulo: 'Doador',
      descricao: 'Você poderá fazer doações', 
    },
    {
      para: '/cadastro-usuario/cuidador',
      imagem: FundoCuidador,
      titulo: 'Cuidador',
      descricao: 'Você ficará responsável por um animal', 
    },
  ]

  return (
    <PaginaTemplate tema={tema}>
      <BotaoVoltar tema={tema} onClick={() => window.history.back()} />
      <StyledMain>
        <StyledImg alt="foto gato" className='esquerda'/>
        <StyledDiv>
          <StyledH1>Escolha como quer atuar</StyledH1>
          <StyledBotoes>
            {
              botoes.map(botao => {
                return (
                  <Link key={botao.titulo} to={botao.para} className='link'>
                    <StyledButton type='button' style={{backgroundImage: `url(${botao.imagem})`}}>
                      <StyledH2>{botao.titulo}</StyledH2>
                      <StyledP>{botao.descricao}</StyledP>
                    </StyledButton>
                  </Link>
                )
              })
            }
          </StyledBotoes>
        </StyledDiv>
        <StyledImg alt="foto cão" className='direita'/>
      </StyledMain>
    </PaginaTemplate>
  )
}

export default EscolhaUsuario;