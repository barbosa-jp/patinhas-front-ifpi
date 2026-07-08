import {
  StyledH1,
  StyledGrid,
  StyledDiv,
} from './style.js';

import BotaoVoltar from '../../components/BotaoVoltar'
import InputText from '../../components/InputText';
import Select from '../../components/Select';
import Botao from '../../components/Botao';
import PaginaTemplate from '../../components/PaginaTemplate';
import Textarea from '../../components/Textarea';
import CardCadastro from '../../components/CardCadastro/index.jsx';

import Cookies from 'js-cookie';

import api from '../../services/api.js';

import { useState, useRef } from 'react';

export default function PetCadastro() {
  const [imagemArquivo, setImagemArquivo] = useState(null);

  console.log(imagemArquivo)

  const refSituacao = useRef();
  const refIdade = useRef();
  const refSexo = useRef();
  const refNome = useRef();
  const refVacinado = useRef();
  const refCastrado = useRef();
  const refDescricao = useRef();

  function verificarCampos(lista) {
    const camposVazios = lista.map(campo => {
      return campo.current.value;
    })

    if (camposVazios.includes('')) {
      alert('Há campos vazios!')
    }

    return camposVazios.includes('')
  }

  // Função para converter imagem para Base64
function converterParaBase64(arquivo) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(arquivo);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Função para comprimir e redimensionar
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

  async function cadastrar(){
    try {
      const cookie = Cookies.get('token-login');
      const formData = new FormData();

      const listaRefs = [refNome, refIdade, refCastrado, refVacinado, refDescricao, refSituacao, refSexo];
      
      if (verificarCampos(listaRefs) || imagemArquivo === null) return

    let imagemBase64 = await comprimirImagem(imagemArquivo, 0.5, 600);
    
    const tamanhoKB = (imagemBase64.length / 1024).toFixed(2);
    
    if (tamanhoKB > 500) {
      imagemBase64 = await comprimirImagem(imagemArquivo, 0.3, 400);
    }

      formData.append('nome', refNome.current.value);
      formData.append('idade', refIdade.current.value);
      formData.append('castracao', refCastrado.current.value === 'true');
      formData.append('vacinacao', refVacinado.current.value === 'true');
      formData.append('descricao', refDescricao.current.value);
      formData.append('situacao', refSituacao.current.value);
      formData.append('sexo', refSexo.current.value);
      formData.append('imagem', imagemBase64);
      formData.append('vermifugacao', false);
      formData.append('data_vacina', null);

      console.log(        {
          'nome': refNome.current.value,
          'idade': refIdade.current.value,
          'sexo': refSexo.current.value,
          'descricao': refDescricao.current.value,
          'imagem': imagemBase64,
          'situacao': refSituacao.current.value,
          'vacinacao': refVacinado.current.value === 'true',
          'castracao': refCastrado.current.value === 'true',
        })

      const response = await api.pets.post(
        "/cadastro-pet", 
        {
          'nome': refNome.current.value,
          'idade': refIdade.current.value,
          'sexo': refSexo.current.value,
          'descricao': refDescricao.current.value,
          'imagem': imagemBase64,
          'situacao': refSituacao.current.value,
          'vacinacao': refVacinado.current.value === 'true',
          'castracao': refCastrado.current.value === 'true',
        },
        {headers: {"Authorization": `Bearer ${cookie}`, "Content-Type": "application/json"}}
      );
  
      alert(response.data.message);
      window.history.back()
    } catch (err) {
      console.error("Axios err completo:", err);
      if (err.response) {
        console.error("Response data:", err.response.data.error);
        console.error("Response status:", err.response.status);
        alert(`Erro: ${err.response.data.mensagem || err.response.data.error || err}`);
      } else if (err.request) {
        console.error("Request sem resposta:", err.request);
        alert("Erro: sem resposta do servidor");
      } else {
        console.error("Erro inesperado:", err.message);
        alert("Erro inesperado: ", err.message);
      }
    }
  }
  
  const situacao = [
    {
      value: 'DESABRIGADO',
      opcao: 'Desabrigado'
    },
    {
      value: 'POSSUI LAR TEMPORARIO',
      opcao: 'Possui lar temporário'
    },
    {
      value: 'ESPERANDO CIRURGIA',
      opcao: 'Esperando cirurgia'
    }
  ];

  const vacinado = [
    {
      value: true,
      opcao: 'Vacinado'
    },
    {
      value: false,
      opcao: 'Não vacinado'
    },
  ];

  const sexo = [
    {
      value: 'MACHO',
      opcao: 'Macho'
    },
    {
      value: 'FEMEA',
      opcao: 'Fêmea'
    },
  ];

  const castrado = [
    {
      value: true,
      opcao: 'Castrado'
    },
    {
      value: false,
      opcao: 'Não Castrado'
    },
  ]

  return (
    <PaginaTemplate tema='claro' scroll='scroll'>
      <BotaoVoltar onClick={() => window.history.back()} tema='claro'/>
      <CardCadastro action={cadastrar}>
        <StyledH1>Cadastro do Animal</StyledH1>
        <StyledGrid>
          <InputText placeholder='Digite o nome...' type='text' tema='claro' ref={refNome}></InputText>
          <Select opcoes={situacao} placeholder='Escolha a situação...' tema='claro' ref={refSituacao}/>
          <InputText placeholder='Digite a idade...' type='number' ref={refIdade} tema='claro'></InputText>
          <Select opcoes={sexo} placeholder='Escolha o sexo...' tema='claro' ref={refSexo}/>
          <Select opcoes={vacinado} placeholder='Vacinado?' tema='claro' ref={refVacinado}/>
          <Select opcoes={castrado} placeholder='Castrado?' tema='claro'ref={refCastrado}/>
        </StyledGrid>
        <StyledDiv>
          <Textarea placeholder='Digite uma pequena descrição...' ref={refDescricao}></Textarea>
          <InputText type='image' funcao={setImagemArquivo}></InputText>
        </StyledDiv>
        <Botao tema='claro' type='submit'>Cadastrar</Botao>
      </CardCadastro>
    </PaginaTemplate>
  )
};