import {
  StyledMain,
  StyledImagemPrincipal,
  StyledConteudo,
  StyledAnimal,
  StyledNome,
  StyledH1,
  StyledDescricao,
  StyledTags,
  StyledCuidador,
  StyledContato,
  StyledWhats,
  StyledInformacoes,
  StyledBotoes
} from './style.js';

import BotaoVoltar from '../../components/BotaoVoltar';
import PaginaTemplate from '../../components/PaginaTemplate';
import Tag from '../../components/Tag/index.jsx';
import BotaoEditar from '../../components/BotaoEditar';
import BotaoDeletar from '../../components/BotaoDeletar';

import ImgWhatsapp from '../../assets/whatsapp.svg';
import IconeFemea from '../../assets/icone-femea.png';
import IconeMacho from '../../assets/icone-macho.png';
import IconeEditar from '../../assets/icone-lapis.png';

import api from '../../services/api.js';
import Cookies from 'js-cookie';

import { useState } from 'react';
import { useLoaderData } from 'react-router';

export default function PetInfos() {
  const [animal, setAnimal] = useState('');
  const petId = useLoaderData();
  const apiWhats = 'https://api.whatsapp.com/send?phone=';
  const cookie = Cookies.get('token-login');

  const cargo = localStorage.getItem('user-cargo');
  const nome = localStorage.getItem('user-nome');
  
  async function getAnimal() {
    const response = await api.pets.get(`/pet-info/${petId.pet_id}`);
    const animal = response.data;

    setAnimal(animal);
  }

  function getImagemUrl(caminho) {
    return caminho;
  }

  function formatarNumero(numero) {
    const aux = numero;
    return `(${aux[0] + aux[1]}) ${aux[2]} ${aux[3] + aux[4] + aux[5] + aux[6]}-${aux[7] + aux[8] + aux[9] + aux[10]}`
  }

  console.log(Cookies.get('usuario-cargo'))
console.log(animal.criado_por)
console.log(Cookies.get('usuario') === animal.criado_por)

  function mostrarAnimal() { 
    if (animal === '') { 
      getAnimal();
    } else {
      return (
        <StyledMain>
          <StyledImagemPrincipal src={getImagemUrl(animal.imagem)} alt="foto gato"/>
          <StyledConteudo>
            <StyledAnimal>
                <StyledBotoes>
                {
                  (Cookies.get('usuario') === animal.criado_por || Cookies.get('usuario-cargo') === 'ADMIN') &&
                  <BotaoEditar pagina='pet' infos={animal}></BotaoEditar>
                }
                {
                  Cookies.get('usuario-cargo') === 'ADMIN' &&
                  <BotaoDeletar pagina='pet' id={animal.id}></BotaoDeletar>
                }
                </StyledBotoes>
              <StyledNome>
                <StyledH1>{animal.nome}</StyledH1>
                <img src={animal.sexo === 'FEMEA' ? IconeFemea : IconeMacho} alt="ícone sexo"/>
              </StyledNome>
              <Tag fundo='roxo'>{animal.raca ? 'De Raça' : 'Vira-lata'} com {animal.idade} {animal.idade > 1 ? 'meses' : 'mês'}</Tag>
              <StyledDescricao>{animal.descricao}</StyledDescricao>
              <StyledTags>
                <Tag fundo={animal.castracao ? 'verde' : 'rosa'}>{animal.castracao ? 'Castrado' : 'Não castrado'}</Tag>
                <Tag fundo={animal.vacinacao ? 'verde' : 'rosa'}>{animal.vacinacao ? 'Vacinado' : 'Não vacinado'}</Tag>
              </StyledTags>
            </StyledAnimal>
            <StyledCuidador>
              <StyledH1>Cuidador</StyledH1>
              <StyledContato>
                <StyledWhats type='button' className='button' href={`${apiWhats}${animal.contato_cadastrado}`} target='_blanck'>
                  <img src={ImgWhatsapp} alt='whatsapp'/>
                </StyledWhats>
                <StyledInformacoes>
                  <h2>{animal.nome_cadastrado}</h2>
                  <p>{formatarNumero(animal.contato_cadastrado)}</p>
                </StyledInformacoes>
              </StyledContato>
            </StyledCuidador>
          </StyledConteudo>
        </StyledMain>
      )
    }
  }

  return (
    <PaginaTemplate tema='claro' scroll='scroll'>
      <BotaoVoltar alinhar='direita' tema='claro' onClick={() => window.history.back()}/>
      { mostrarAnimal() }
    </PaginaTemplate>
  );
}