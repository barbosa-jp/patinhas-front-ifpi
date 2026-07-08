import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Login from './pages/Login';
import EscolhaUsuario from './pages/EscolhaUsuario';
import PetInfos from './pages/PetInfos';
import ListaAnimais from './pages/ListaAnimais';
import Doacao from './pages/Doacao';
import Posts from './pages/Posts';
import Perfil from './pages/Perfil';
import Sobre from './pages/Sobre';
import Inicio from './pages/Inicio';

import PetCadastro from './pages/PetCadastro';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroVaquinha from './pages/CadastroVaquinha'
import CadastroPost from './pages/CadastroPost';
import CadastroPontosColeta from './pages/CadastroPontoColeta';

import EditarPost from './pages/EditarPost';
import EditarPet from './pages/EditarPet';
import EditarPonto from './pages/EditarPonto';
import EditarVaquinha from './pages/EditarVaquinha';

import Concluida from './pages/AprovacaoPag/Concluida';
import Cancelada from './pages/AprovacaoPag/Cancelada';
import ConfirmarEmail from './pages/ConfirmarEmail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/adocao',
    element: <ListaAnimais />
  },
  {
    path: '/cadastro-pet',
    element: <PetCadastro/>
  },
  {
    path: '/pet-info/:petId',
    loader: async ({ params }) => {
      return { pet_id: params.petId };
    },
    element: <PetInfos />
  },
  {
    path: '/escolha-cargo',
    element: <EscolhaUsuario />
  },
  {
    path: '/cadastro-usuario/:tipoUsuario',
    loader: async ({ params }) => {
      return { tipo_usuario: params.tipoUsuario };
    },
    element: <CadastroUsuario />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/doacao',
    element: <Doacao />
  },
  {
    path: '/concluida',
    element: <Concluida />
  },
  {
    path: '/cancelada',
    element: <Cancelada />
  },
  {
    path: '/posts',
    element: <Posts />
  },
  {
    path: '/perfil',
    element: <Perfil />
  },
  {
    path: '/cadastro-vaquinha',
    element: <CadastroVaquinha />
  },
  {
    path: '/cadastro-post',
    element: <CadastroPost />
  },
  {
    path: '/inicio',
    element: <Inicio />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '/cadastro-ponto-coleta',
    element: <CadastroPontosColeta />
  },
  {
    path: '/editar-post',
    element: <EditarPost />,
  },
  {
    path: '/editar-pet',
    element: <EditarPet />,
  },
  {
    path: '/editar-pontos',
    element: <EditarPonto />,
  },
  {
    path: '/editar-vaquinha',
    element: <EditarVaquinha />,
  },
  {
    path: '/email-confirmado',
    element: <ConfirmarEmail />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
