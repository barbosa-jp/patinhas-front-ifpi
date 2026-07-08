import {
  StyledInputImage,
  StyledImgSelecionda,
  StyledDiv,
} from './style.js'

import { useState, useId } from 'react';

import IconeImagem from '../../../assets/icone-imagem.png';

function InputImg({setarImagem, imagem = ''}) {
  const [imagemPreview, setImagemPreview] = useState(imagem);

  const id = useId();
  
  function mostrarImagem(event) {
    const arquivo = event.target.files[0];
    setImagemPreview(URL.createObjectURL(arquivo));
    setarImagem(arquivo);
  }

  function exibirImagem() {
    if (imagemPreview === '') {
      return <>
        <img src={IconeImagem} alt="icone imagem" className='icone'/>
        <p>Clique aqui para adicionar uma imagem</p>
      </>
    } else {
      return <StyledImgSelecionda src={imagemPreview} alt="imagem selecionada"/>
    }
  }

  return <StyledDiv>
    <StyledInputImage htmlFor={id}>
      {exibirImagem()}
    </StyledInputImage>
    <input 
      id={id}
      type="file"
      name='imagem'
      accept='.png, .jpg, .svg, .jpeg'
      multiple
      onChange={mostrarImagem}
      className='input-imagem'
    />
  </StyledDiv>
}

export default InputImg;