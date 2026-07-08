import {
  StyledImg,
  StyledDivCadastro,
  StyledMain,
  StyledImgMobile
} from "./style";

import { useLoaderData } from 'react-router';
import { useState } from "react";
import Cookies from "js-cookie";

import BotaoVoltar from "../../components/BotaoVoltar";
import PaginaTemplate from "../../components/PaginaTemplate";
import Cuidador from './Cuidador';
import Doador from './Doador';

import FotoGato from "../../assets/cadastro-gato.svg";

import api from "../../services/api.js";

function CadastroDoador() {
  const tipoUsuario = useLoaderData().tipo_usuario;
  
  const [etapa, setEtapa] = useState(1);
  const [cadastro, setCadastro] = useState({});

  const tema = 'escuro';

  async function fazerCadastro(url, novoCadastro) {
    try {
      const jsonCadastro = JSON.stringify(novoCadastro);
      const response = await api.login.post(url === "registro-doador" ? "registro-doador" : "registro-cuidador", jsonCadastro, {headers: {"Content-Type": "application/json"}});
      Cookies.set('token-login', response.data.token, { expires: 1 });
      return true;
    } catch (error) {
      alert('Cadastro não realizado!');
      console.log(error);
      return false
    }
  }

  function verificarTermosUso(termo) {
    if (!termo.current.checked) { 
      alert('Termos de uso não aceitos!');
      return false; 
    }

    return true;
  }

  function verificarCampos(lista) {
    const camposVazios = lista.map(campo => {
      return campo.current.value;
    })

    if (camposVazios.includes('')) {
      alert('Há campos vazios!')
    }

    return camposVazios.includes('')
  }

  function verificarSenha(senha, confirmarSenha) {
    const valorSenha = senha.current.value

    if (valorSenha.length < 6) {
      alert('A senha precisa ter no mínimo 6 caracteres')
      return false;
    }

    if (!/[a-z]/.test(valorSenha)) {
      alert('A senha precisa ter pelo menos:\n - uma letra maiúscula\n - uma letra minúscula [X]\n - um número\n - um caractere especial');
      return false
    }

    if (!/[A-Z]/.test(valorSenha)) {
      alert('A senha precisa ter pelo menos:\n - uma letra maiúscula [X]\n - uma letra minúscula\n - um número\n - um caractere especial');
      return false
    }

    if (!/[0-9]/.test(valorSenha)) {
      alert('A senha precisa ter pelo menos:\n - uma letra maiúscula\n - uma letra minúscula\n - um número [X]\n - um caractere especial');
      return false
    }

    if (!/[!|@|#|$|%|^|&|*|(|)|-|_]/.test(valorSenha)) {
      alert('A senha precisa ter pelo menos:\n - uma letra maiúscula\n - uma letra minúscula\n -um número \n - um caractere especial [X]');
      return false
    }

    if (valorSenha !== confirmarSenha.current.value) {
      alert('Senhas não coincidem!');
      return false
    }

    return true
  }

  const verificarCPF = (cpf) => {
    const erro = 'CPF inválido!';

    const apenasNumeros = String(cpf || "").replace(/\D/g, "");
    if (!apenasNumeros || apenasNumeros.length !== 11) {
      alert(erro);
      return false;
    }
    
    if (/^(\d)\1+$/.test(apenasNumeros)) {
      alert(erro);
      return false;
    }
    
    const calcDigitoVerificador = (cpfArray, factor) => {
      let total = 0;
      for (let i = 0; i < factor - 1; i++) {
        total += Number(cpfArray[i]) * (factor - i);
      }
      
      const resto = (total * 10) % 11;
      return resto === 10 ? 0 : resto;
    };
    
    const digito1 = calcDigitoVerificador(apenasNumeros, 10);
    const digito2 = calcDigitoVerificador(apenasNumeros, 11);

    if (
      digito1 !== parseInt(apenasNumeros[9], 10) ||
      digito2 !== parseInt(apenasNumeros[10], 10)
    ) {
      alert(erro);
      return false;
    }
    return true;
  }

  const verificarTelefone = (telefone) => {
    const numerosTelefone = String(telefone || "").replace(/\D/g, "");
    const erro = 'Telefone inválido!';

    //Telefone BR com 10 ou 11 dígitos, incluso DDD
    if (!/^\d{10,11}$/.test(numerosTelefone)) {
      alert(erro);
      return false;
    }

    // celular que começa com o 9 após o DDD tem 11 dígitos
    if (numerosTelefone.length === 11 && numerosTelefone[2] !== "9") {
      alert(erro);
      return false;
    }

    return true
  };

  return (
    <PaginaTemplate tema={tema}>
      <BotaoVoltar 
        tema={tema}
        onClick={() => { 
          etapa > 1 ? setEtapa(etapa-1) : window.history.back();
          setValor('');
        }} 
        alinhar='esquerda'
      />
      <StyledMain>
        <StyledDivCadastro>
          {tipoUsuario === 'doador' 
            ? <Doador 
                etapa={etapa} 
                setEtapa={setEtapa} 
                verificarCampos={verificarCampos} 
                verificarSenha={verificarSenha} 
                fazerCadastro={fazerCadastro}
                setCadastro={setCadastro}
                cadastro={cadastro}
                verificarTermosUso={verificarTermosUso}
                tema={tema}
                verificarTelefone={verificarTelefone}
              /> 
            : <Cuidador
                etapa={etapa} 
                setEtapa={setEtapa} 
                verificarCampos={verificarCampos} 
                fazerCadastro={fazerCadastro}
                verificarCPF={verificarCPF}
                setCadastro={setCadastro}
                cadastro={cadastro}
                tema={tema}
                verificarTelefone={verificarTelefone}
                verificarTermosUso={verificarTermosUso}
                verificarSenha={verificarSenha} 
          />}
        </StyledDivCadastro>
        <StyledImg src={FotoGato} alt="foto gato" />
        <StyledImgMobile/>
      </StyledMain>
    </PaginaTemplate>
  );
}

export default CadastroDoador;
