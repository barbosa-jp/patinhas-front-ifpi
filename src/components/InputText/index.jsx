import {
  StyledDiv, 
  StyledInput,
  StyledImgPatinha,
  StyledRoot,
  StyledInputNumero,
  StyledDivRua,
  StyledDivNumero,
} from './style';

import fotoPatinhaBranco from '../../assets/patinha-branco.svg';
import fotoPatinhaRoxo from '../../assets/patinha-roxo.svg';
import iconeOlho from '../../assets/icone-olho.png';
import iconeOlhoFechado from '../../assets/icone-olho-fechado.png';

import InputImg from './InputImg';

import { useState, useEffect } from 'react';

function InputText({placeholder, ref, type = 'text', tema, maxLenght, funcao, reiniciar = '', imagem, value=''}) {
  const [senha, setSenha] = useState(false);
  const [valor, setValor] = useState(`${type === 'endereco' ? value[0] : value}`);
  const [valorNumero, setValorNumero] = useState(value[1]);

  useEffect(() => {
    if (reiniciar !== '') {
      setValor('');
    }
  }, [reiniciar]);

  function criarMascara() {
    const valorInput = document.getElementsByClassName(`mascara-${type}`)[0];
    const valorAnterior = valor.replace(/([^0-9])+/g, "");
    let valorPuro = valorInput.value.replace(/([^0-9])+/g, "");
    
    if (valorPuro.length <= valorAnterior.length) {
      valorPuro = valorAnterior.slice(0, -1);
    }
    
    if (valorPuro.length > maxLenght) {
      valorInput.value = valor;
      return
    }
    
    const mascaras = {
      telefone: '(__) _____-____',
      cpf: '___.___.___-__',
      cep: '_____-___'
    }

    let mascara;

    switch (type) {
      case 'tel':
        mascara = mascaras.telefone;
        break;
      
      case 'cpf':
        mascara = mascaras.cpf;
        break;

      case 'cep':
        mascara = mascaras.cep;
        break;
    }

    for (let i = 0; i < valorPuro.length; i++){
      mascara = mascara.replace('_', valorPuro[i])
    }
    
    setValor(mascara)
    valorInput.value = mascara;
  };

  function tipo() {
    switch (type) {
      case 'endereco':
        return (
          <StyledRoot>
            <StyledDivRua style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
              <StyledImgPatinha src={tema === 'claro' ? fotoPatinhaRoxo : fotoPatinhaBranco} alt="icone patinha"/>
              <StyledInput type='text' placeholder='Digite sua rua...' ref={ref[0]} className={tema} value={value[0] === undefined ? '' : valor} onInput={(e) => setValor(e.target.value)}/>
            </StyledDivRua>  
            <StyledDivNumero className={`input-${tema}`} style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
              <StyledInputNumero type='text' placeholder='Nº' ref={ref[1]} className={tema} value={valorNumero} onInput={(e) => setValorNumero(e.target.value)}/>
            </StyledDivNumero>        
          </StyledRoot>
        )
      
      case 'password':
        return (
          <StyledDiv style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
            <StyledImgPatinha src={tema === 'claro' ? fotoPatinhaRoxo : fotoPatinhaBranco} alt="icone patinha"/>
            <StyledInput 
              type={senha ? 'text' : 'password'} 
              placeholder={placeholder} 
              ref={ref} className={tema} 
              value={valor} 
              onInput={(e) => setValor(e.target.value)}
            />
            <StyledImgPatinha src={senha ? iconeOlhoFechado : iconeOlho} alt="icone olho" onClick={() => setSenha(!senha)} className='mostrar-senha'/>
          </StyledDiv>
        )

      case 'tel':
        return (
          <StyledDiv style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
            <StyledImgPatinha src={tema === 'claro' ? fotoPatinhaRoxo : fotoPatinhaBranco} alt="icone patinha"/>
            <StyledInput 
              type='tel' 
              placeholder={placeholder} 
              ref={ref} 
              className={`${tema} mascara-tel`}
              value={valor} 
              onInput={(e) => criarMascara(e)}
            />
          </StyledDiv>
        )

      case 'cpf':
        return (
          <StyledDiv style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
            <StyledImgPatinha src={tema === 'claro' ? fotoPatinhaRoxo : fotoPatinhaBranco} alt="icone patinha"/>
            <StyledInput 
              type='text' 
              placeholder={placeholder} 
              ref={ref} 
              className={`${tema} mascara-cpf`} 
              value={valor}
              onInput={(e) => criarMascara(e)}
            />
          </StyledDiv>
        )

      case 'cep':
        return (
          <StyledDiv style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
            <StyledImgPatinha src={tema === 'claro' ? fotoPatinhaRoxo : fotoPatinhaBranco} alt="icone patinha"/>
            <StyledInput 
              type='text' 
              placeholder={placeholder} 
              ref={ref} className={`${tema} mascara-cep`} 
              onInput={(e) => criarMascara(e)}
              value={valor}
            />
          </StyledDiv>
        )

      case 'image':
        return <InputImg setarImagem={funcao} imagem={imagem}></InputImg>
    }

    return (
      <StyledDiv style={{borderBottom: `2px solid ${tema === 'claro' ? 'var(--cor-roxo)' : 'var(--cor-branco)'}`}}>
        <StyledImgPatinha src={tema === 'claro' ? fotoPatinhaRoxo : fotoPatinhaBranco} alt="icone patinha"/>
        <StyledInput type={type} placeholder={placeholder} ref={ref} className={tema} value={valor} onInput={(e) => setValor(e.target.value)}/>
      </StyledDiv>
    )
  }

  return (
    tipo()
  )
}

export default InputText;