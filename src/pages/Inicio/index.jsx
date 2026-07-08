import {
  StyledInicio,
  StyledMain,
  StyledTitulo,
  StyledDiv,
  StyledDivBotao,
  StyledCards,
  StyledCard,
  StyledSeta,
} from './style';

import PaginaTemplate from '../../components/PaginaTemplate';
import Header from '../../components/Header';
import CardAnimal from '../ListaAnimais/CardAnimal';
import CardPost from '../../components/CardPost';
import Botao from '../../components/Botao';

import FotoInicio from '../../assets/imagem-inicio.svg';
import FotoDoacao from '../../assets/cao-inicio-doacao.png';
import FotoCuidador from '../../assets/cao-inicio-cuidador.png';
import Seta from '../../assets/seta.svg';

import api from '../../services/api';

import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Inicio() {
  const [dados, setDados] = useState('');

  useEffect(() => {
    async function getDados() {
      const animais = await api.pets.get('/');
      const posts = await api.posts.get('/');

      setDados({
        animais: animais.data,
        posts: posts.data
      })
    }

    getDados();
  }, []);

  const tema = 'claro';
  return <PaginaTemplate tema={tema} scroll='scroll'>
    <Header paginaAtual='inicio'/>
    <StyledMain>
      <StyledInicio>
        <img src={FotoInicio} alt="foto cao" className='cao'/>
        <StyledTitulo>
          <p>Garanta um</p>
          <span>AMOR</span>
          <p>na sua casa!</p>
        </StyledTitulo>
      </StyledInicio>
      <StyledDiv>
        <h1 className='titulo'>Esperando por você</h1>
        <StyledCards>
          <div className='animais'>
            { 
              dados !== '' && 
              dados.animais.map((animal) => {
              return <CardAnimal 
                key={animal.id}
                animal={animal}
              
              />})
            }
          </div>
        </StyledCards>
        <StyledDivBotao>
          <Botao type='button' onClick={() => {}} tema={tema}><Link className='link' to={`/adocao`} >Saiba Mais!</Link></Botao>
        </StyledDivBotao>
      </StyledDiv>
      <StyledDiv>
        <h1 className='titulo'>Como você pode ajudar</h1>
        <StyledCard className='doacao'>
          <div className='texto'>
            <h1>Faça uma doação!</h1>
            <p>Além de dinheiro, você pode ajudar doando rações, remédios para os animais, garrafas PET e muito mais! </p>
            <Botao type='button' tema={tema}><Link className='link' to={`/doacao`} >Saiba Mais!</Link></Botao>
          </div>
          <img src={FotoDoacao} alt="imagem cao bebendo agua" />
        </StyledCard>
        <StyledCard className='cuidador'>
          <img src={FotoCuidador} alt="imagem cao bebendo agua" />
          <div className='texto'>
            <h1>Seja um cuidador!</h1>
            <p>Se tornando um cuidador, você ficará responsável por um animalzinho até sua adoção!</p>
            <Link className='link' to={`/cadastro-usuario/cuidadorb`}><Botao type='button' tema='escuro'>Saiba Mais!</Botao></Link>
          </div>
        </StyledCard>
      </StyledDiv>
      <StyledDiv>
        <h1 className='titulo'>Saiba das últimas notícias</h1>
        <StyledCards>
          <div className='posts'>
            { 
              dados !== '' && 
              dados.posts.map((post) => {
              return <CardPost 
                key={post.id}
                post={post}
              />})
            }
          </div>
        </StyledCards>
        <StyledDivBotao>
          <Botao type='button' onClick={() => {}} tema={tema}><Link className='link' to={`/posts`} >Saiba Mais!</Link></Botao>
        </StyledDivBotao>
      </StyledDiv>
    </StyledMain>
  </PaginaTemplate>
}