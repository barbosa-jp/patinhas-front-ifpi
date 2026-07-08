import {
  Botao
} from './style.js';

import IconeEditar from '../../assets/icone-lixo.svg';
import api from '../../services/api.js';
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router';

export default function BotaoDeletar({pagina, id}) {
  const cookie = Cookies.get('token-login');
  const navigate = useNavigate(); 

  async function prepararDelete(paginas, tipoApi) {
    const response = await api[tipoApi[pagina]].patch(
      `/${paginas[pagina]}`,
      {id: id},
      { headers: { "Authorization": `Bearer ${cookie}` } }
    );

    alert(response.data.message);
    if (pagina === 'pet') {
      navigate(-1);
    } else {
      window.location.reload();
    }
  }

  function deletar() {
    const paginas = {
      post: 'delete-post',
      pet: 'delete-pet',
      vaquinha: 'delete-vaquinha',
      pontos: 'delete-coleta',
      perfil: 'delete-perfil',
    };

    const tipoApi = {
      post: 'posts',
      pet: 'pets',
      vaquinha: 'doacao',
      pontos: 'doacao',
      perfil: 'perfil',
    }

    prepararDelete(paginas, tipoApi)
  }
  
  return <Botao type="button" onClick={deletar}>
    <img src={IconeEditar} alt="botao deletar" />
  </Botao>
}