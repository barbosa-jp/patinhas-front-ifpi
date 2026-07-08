import {
  StyledInicio,
  StyledMain,
  StyledTitulo,
  StyledTextoProjeto,
  StyledTextoFrase,
  StyledConteudo,
  StyledSeta,
  StyledImagemCao,
  StyledMeio,
  StyledEsquerdo,
  StyledCirculo,
  StyledDireito,
  StyledTituloProtetores,
  StyledTextoProtetores,
  StyledFraseProtetores,
  StyledSetaProtetores,
  StyledFim,
  StyledEsquerdoEquipe,
  StyledTituloEquipe,
  StyledTextoEquipe,
  StyledDireitoEquipe,
  StyledImagemEquipe
} from './style';

import PaginaTemplate from '../../components/PaginaTemplate';
import Header from '../../components/Header';

import FotoSobre from '../../assets/foto-sobre.png';
import Seta from '../../assets/seta.svg';
import SetaRoxa from '../../assets/seta-roxa.png';
import FotoEquipe from '../../assets/foto-equipe.png';
import LogoProtetores from '../../assets/logo-protetores.png'

export default function Sobre() {
  const tema = 'claro';
  return <PaginaTemplate tema={tema} scroll='scroll'>
    <Header paginaAtual='sobre'/>
      <StyledMain>
      <StyledInicio>
        <StyledConteudo>
          <StyledTitulo>
            <p>Os <span>animais de rua</span> em Parnaíba precisam de você!</p>
          </StyledTitulo>
          <StyledTextoProjeto>
            <p>O projeto Força Patinhas veio para apoiar a causa animal na cidade, centralizando as informações dos pets afim de trazer um lar para os bichinhos, além de trazer novas pessoas para ajudar, tanto com doações, quanto se tornando um cuidador.</p>
          </StyledTextoProjeto>
          <StyledTextoFrase>
            <p>"Adotar é um <span>ato de amor</span>. Você salva uma vida e ganha um amigo para sempre.”</p>
          </StyledTextoFrase>
          <StyledSeta src={Seta} alt="seta para baixo" />
        </StyledConteudo>
          <StyledImagemCao>
        </StyledImagemCao>
      </StyledInicio>
      <StyledMeio>
        <StyledEsquerdo>
          <StyledCirculo>
            <img src={LogoProtetores} alt="Logo Protetores" />
          </StyledCirculo>
        </StyledEsquerdo>
  
        <StyledDireito>
          <StyledTituloProtetores>
            Protetores de Animais Independentes de Parnaíba
          </StyledTituloProtetores>
          <StyledTextoProtetores>
            Para conseguir continuar seu trabalho, o grupo de Protetores de Animais 
            Independentes de Parnaíba conta com o apoio de voluntários que desempenham 
            funções diversas, desde o acolhimento de animais até a doação de material 
            e de dinheiro para procedimentos veterinários, como a castração.
          </StyledTextoProtetores>
          <StyledFraseProtetores>
            O projeto vem como apoio para a organização, engajamento e divulgação do 
            grupo e de suas atividades!
          </StyledFraseProtetores>
          <StyledSetaProtetores src={SetaRoxa} alt="seta para baixo" />
        </StyledDireito>
    </StyledMeio>
    <StyledFim>
      <StyledEsquerdoEquipe>
        <StyledTituloEquipe>
          Por trás do Projeto
        </StyledTituloEquipe>
        <StyledTextoEquipe>
            A equipe do Força Patinhas é formada por estudantes de Análise e 
            Desenvolvimento de Sistemas do Instituto Federal do Piauí, campus Parnaíba. 
            A ideia do Projeto veio em uma disciplina de Planejamento Extensionista, 
            visando ajudar a população de Parnaíba e região.
        </StyledTextoEquipe>
      </StyledEsquerdoEquipe>
      <StyledDireitoEquipe>
        <StyledImagemEquipe>
          <img src={FotoEquipe} alt="Equipe Força Patinhas" />
        </StyledImagemEquipe>
      </StyledDireitoEquipe>
    </StyledFim>
    </StyledMain>
  </PaginaTemplate>
}