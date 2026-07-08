import {
  StyledDiv,
  StyledMain,
  StyledImg,
  StyledTitulo
} from './style.js';

import PaginaTemplate from '../../components/PaginaTemplate';
import BotaoVoltar from '../../components/BotaoVoltar';
import CardCadastro from '../../components/CardCadastro';
import Input from '../../components/InputText';
import Textarea from '../../components/Textarea';
import Botao from '../../components/Botao';

import api from '../../services/api.js';

import { useState, useRef } from 'react';
import Cookies from 'js-cookie';

function CadastroPost() {
  //const refAutor = useRef();
  const refTexto = useRef();
  const [imagemArquivo, setImagemArquivo] = useState(null);

  async function comprimirImagem(arquivo, qualidade = 0.5, maxWidth = 800) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(arquivo);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          const base64 = canvas.toDataURL('image/jpeg', qualidade);
          resolve(base64);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  }

  function setarImagem(imagem) {
    setImagemArquivo(imagem);
  }

  function verificarCampos(lista) {
    const camposVazios = lista.map(campo => {
      return campo.ref.current.value;
    });

    if (camposVazios.includes('')) {
      alert('Há campos vazios!');
    }

    return camposVazios.includes('');
  }

  async function cadastrar() {
    try {
      const cookie = Cookies.get('token-login');
      const formData = new FormData();
      const nome = localStorage.getItem('user-nome')
      const data = new Date;
      console.log(nome);
      
      const listaRefs = [
        //{ ref: refAutor, nome: 'autor' },
        { ref: refTexto, nome: 'descricao' }
      ];
      
      if (verificarCampos(listaRefs)) return;
      
      let imagemBase64 = null;
      if (imagemArquivo) {
        imagemBase64 = await comprimirImagem(imagemArquivo, 0.5, 800);
        const tamanhoKB = (imagemBase64.length / 1024).toFixed(2);
        
        console.log(`Tamanho da imagem: ${tamanhoKB}KB`);
        
        if (tamanhoKB > 500) {
          imagemBase64 = await comprimirImagem(imagemArquivo, 0.3, 600);
          console.log(`Tamanho após compressão: ${(imagemBase64.length / 1024).toFixed(2)}KB`);
        }
      }

      listaRefs.map(ref => formData.append(ref.nome, ref.ref.current.value));
      if (imagemBase64) {
        formData.append('imagem', imagemBase64);
      }

      console.log(formData.getAll('descricao'))
      
      const response = await api.posts.post(
        "/cadastro-post",
        formData,
        { headers: { "Authorization": `Bearer ${cookie}` } }
      );
  
      alert(response.data.message);
      
      //refAutor.current.value = '';
      refTexto.current.value = '';
      setImagemArquivo(null);
      
    } catch (err) {
      console.error("Erro ao cadastrar post:", err);
      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        alert(`Erro: ${err.response.data.mensagem || err.response.data.message || "Erro ao cadastrar post"}`);
      } else if (err.request) {
        console.error("Request sem resposta:", err.request);
        alert("Erro: sem resposta do servidor");
      } else {
        console.error("Erro inesperado:", err.message);
        alert("Erro inesperado: " + err.message);
      }
    }
  }

  return (
    <PaginaTemplate tema='claro'>
      <BotaoVoltar tema='claro' />
      <CardCadastro action={cadastrar}>
        <StyledTitulo>Cadastro de Postagem</StyledTitulo>
        <StyledMain>
          <StyledDiv>
            <Textarea 
              placeholder='Digite o texto desejado...' 
              ref={refTexto}
            />
          </StyledDiv>
          <StyledImg>
            <Input type='image' funcao={setarImagem} />
          </StyledImg>
        </StyledMain>
        <Botao type='submit' tema='claro'>Enviar</Botao>
      </CardCadastro>
    </PaginaTemplate>
  );
}

export default CadastroPost;