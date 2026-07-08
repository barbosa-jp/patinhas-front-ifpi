import {
  Card,
  Cabecalho,
  LadoEsquerdo,
  AvatarContainer,
  AvatarImagem,
  Autor,
  LadoDireito,
  DataPost,
  TextoConteudo,
  ContainerImagem,
  ImagemPost,
  Rodape,
  TextoCompartilhe,
  IconeSocial
} from './style';

import React from 'react';

import PatinhaBege from '../../assets/patinha-bege.png';
import IconeWhatsapp from '../../assets/icone-whatsapp.png';
import IconeInstagram from '../../assets/icone-instagram.png';

import BotaoEditar from '../BotaoEditar';
import Cookies from 'js-cookie';
import BotaoDeletar from '../BotaoDeletar';

function CardPost({
  post,
  aoCompartilharInstagram = () => {},
  aoCompartilharWhatsapp = () => {}
}) {

  return (
    <Card>
      <Cabecalho>
        <LadoEsquerdo>
          <AvatarContainer>
            <AvatarImagem src={PatinhaBege} alt="Avatar" />
          </AvatarContainer>
          <Autor>{post.dados.nome_cadastrado}</Autor>
        </LadoEsquerdo>
        <LadoDireito>
          <DataPost>{post.dados.criado_em}</DataPost>
          {
            (Cookies.get('usuario') === post.dados.criado_por || Cookies.get('usuario-cargo') === 'ADMIN') &&
            <BotaoEditar pagina='post' infos={post}/>
          } 
          {
            (Cookies.get('usuario-cargo') === 'ADMIN') &&
            <BotaoDeletar pagina='post' id={post.id}/>
          } 
        </LadoDireito>
      </Cabecalho>
      <TextoConteudo>{post.dados.descricao}</TextoConteudo>
      <ContainerImagem>
        <ImagemPost src={post.imagem} alt="Postagem" />
      </ContainerImagem>
{/* 
      <Rodape>
        <TextoCompartilhe>Compartilhe: </TextoCompartilhe>
        <IconeSocial src={IconeInstagram} alt='instagram' onClick={aoCompartilharInstagram}/>
        <IconeSocial src={IconeWhatsapp} alt='whatsapp' onClick={aoCompartilharWhatsapp}/>          
      </Rodape> */}
    </Card>
  );
}

export default CardPost;