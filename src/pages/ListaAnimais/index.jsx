import {
  ContentContainer,
  GridCards,
  StyledCarregando,
  StyledGridContainer,
} from './style.js';

import { useState } from 'react';

import Card from './CardAnimal/index.jsx';
import FiltroBusca from '../../components/FiltroBusca';
import Header from '../../components/Header';
import PaginaTemplate from '../../components/PaginaTemplate';
import Loading from '../../components/Loading/index.jsx';


import api from '../../services/api.js';

export default function ListaAnimais() {
  const [listaAnimal, setListaAnimal] = useState([]);
  const [busca, setBusca] = useState('');

  
  async function getAnimal() {
    const response = await api.pets.get('/');
    const animal = response.data;

    setListaAnimal(animal);
  }

  function mostrarLista() {
    if (listaAnimal.length === 0) {
      getAnimal();
    } else {
      const animais = handleBusca();
      return (
        <StyledGridContainer>
          <GridCards>
            {
              animais.map(animal => (
              <Card 
                animal={animal}
                key={animal.id}
              />))
            }
          </GridCards>  
        </StyledGridContainer>
      )
    }
  }

  const [animaisFiltrados, setAnimaisFiltrados] = useState([]);

  function handleBusca() {
    if (busca !== '') {
      return filtrarAnimais();
    } else {
      return listaAnimal;
    }
  };

  function filtrarAnimais() {
    const termoMinusculo = busca.toLowerCase();
    const filtrados = listaAnimal.filter(animal =>
      animal.nome.toLowerCase().includes(termoMinusculo) ||
      animal.idade.toString().includes(termoMinusculo) ||
      animal.sexo.toLowerCase().includes(termoMinusculo)
    );
    return filtrados;
  }

  return (
    <PaginaTemplate tema='claro'>
      <Header paginaAtual='adocao' />
      <ContentContainer>
        <FiltroBusca
          buscar={setBusca}
          valorBusca={busca}
          rota='/cadastro-pet'
        />

        {listaAnimal.length === 0 ? <StyledCarregando><Loading tema='escuro'></Loading></StyledCarregando> : ''}

        {mostrarLista()}
      </ContentContainer>
    </PaginaTemplate>
  );
};