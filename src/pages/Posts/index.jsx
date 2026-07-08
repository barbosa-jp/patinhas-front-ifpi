import {useEffect, useState} from 'react';

import CardPost from '../../components/CardPost';
import FiltroBusca from '../../components/FiltroBusca';
import Header from '../../components/Header';
import PaginaTemplate from '../../components/PaginaTemplate';
import Loading from '../../components/Loading';

import {
  Container,
  StyledCarregando
} from './style';

import api from '../../services/api';

function Posts() {
  const [posts, setPosts] = useState('');
  const [busca, setBusca] = useState('');

  function handleBusca() {
    if (busca !== '') {
      return filtrar(busca);
    } else {
      return posts;
    }
  };

  function filtrar() {
    const termoMinusculo = busca.toLowerCase();
    const filtrados = posts.filter(animal =>
      animal.dados.nome_cadastrado.toLowerCase().includes(termoMinusculo) ||
      animal.dados.descricao.toLowerCase().includes(termoMinusculo)
    );
    return filtrados;
  }

  useEffect(() => {
    async function buscarPosts() {
      try {
        const response = await api.posts.get('/');
        setPosts(response.data)
      } catch (erro) {
        console.error('Erro ao carregar posts:', erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarPosts();
  }, []);

  /*function aoClicarInstagram(postId) {
    console.log(`Compartilhar no Instagram - Post ${postId}`);
  }

  function aoClicarWhatsapp(postId) {
    console.log(`Compartilhar no WhatsApp - Post ${postId}`);
  }*/
  return (
    <PaginaTemplate tema='claro' scroll='scroll'>
      <Header paginaAtual='posts'/>
      <Container>
        <FiltroBusca 
          buscar={setBusca}
          valorBusca={busca}
          rota={'/cadastro-post'}
        />
        {
          posts === '' ? 
          <StyledCarregando><Loading tema='escuro'></Loading></StyledCarregando> :
          posts.length === 0 ?
          <p>Nenhuma postagem encontrada</p> : 
          handleBusca().map((post) => {
            return <CardPost
              key={post.id}
              post={post}
              //aoCompartilharInstagram={() => aoClicarInstagram(post.id)}
              //aoCompartilharWhatsapp={() => aoClicarWhatsapp(post.id)}
            />
          }
        )}
      </Container>
    </PaginaTemplate>
  );
}
export default Posts;