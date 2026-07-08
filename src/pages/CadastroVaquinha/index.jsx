import {
  StyledDiv,
  StyledMain,
  StyledImg
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

function CadastroVaquinha() {
  const refNome = useRef();
  const refMeta = useRef();
  const refDescricao = useRef();

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
          
          // Retorna como Base64 já comprimido
          const base64 = canvas.toDataURL('image/jpeg', qualidade);
          resolve(base64);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  }

  function setarImagem(imagem) {
    setImagemArquivo(imagem)
  }

  function verificarCampos(lista) {
    const camposVazios = lista.map(campo => {
      return campo.ref.current.value;
    })

    if (camposVazios.includes('')) {
      alert('Há campos vazios!')
    }

    return camposVazios.includes('')
  }

  async function cadastrar(){
    try {
      const cookie = Cookies.get('token-login');
      const formData = new FormData();
      
      const listaRefs = [
        {ref: refNome, nome: 'titulo'},
        {ref: refMeta, nome: 'meta'}, 
        {ref: refDescricao, nome: 'descricao'}, 
      ];
      
      if (verificarCampos(listaRefs)) return
      
      let imagemBase64 = await comprimirImagem(imagemArquivo, 0.5, 600);    
      const tamanhoKB = (imagemBase64.length / 1024).toFixed(2);
      
      if (tamanhoKB > 500) {
        imagemBase64 = await comprimirImagem(imagemArquivo, 0.3, 400);
        console.log(`Tamanho após segunda compressão: ${(imagemBase64.length / 1024).toFixed(2)}KB`);
      }

      
      listaRefs.map(ref => formData.append(ref.nome, ref.ref.current.value));
      formData.append('imagem', imagemBase64);
      console.log(formData.get('titulo'))

      const response = await api.doacao.post(
        "/registro-vaquinha", 
        formData,
        {headers: {"Authorization": `Bearer ${cookie}`, "Content-Type": "application/json"}} 
      );
  
      alert(response.data.message);
      window.location.href = '/doacao';
    } catch (err) {
      console.error("Axios err completo:", err);
      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        alert(`Erro: ${err.response.data.mensagem || err.response.data || err}`);
      } else if (err.request) {
        console.error("Request sem resposta:", err.request);
        alert("Erro: sem resposta do servidor");
      } else {
        console.error("Erro inesperado:", err.message);
        alert("Erro inesperado: ", err.message);
      }
    }
  }

  return <PaginaTemplate tema='claro'>
    <BotaoVoltar tema='claro'/>
    <CardCadastro action={cadastrar}>
      <StyledMain>
        <StyledDiv>
          <h1>Cadastro de Vaquinha</h1>
          <Input placeholder='Digite o nome da vaquinha' type='string' tema='claro' ref={refNome} />
          <Input placeholder='Digite o valor necessário' type='number' tema='claro' ref={refMeta}/>
          <Textarea placeholder='Digite uma descrição...' ref={refDescricao}></Textarea>
          <Botao type='submit' tema='claro'>Enviar</Botao>
        </StyledDiv>
        <StyledImg>
          <Input type='image' funcao={setarImagem}></Input>
        </StyledImg>
      </StyledMain>
    </CardCadastro>
  </PaginaTemplate>
}

export default CadastroVaquinha;