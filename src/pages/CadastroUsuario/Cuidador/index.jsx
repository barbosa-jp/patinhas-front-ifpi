import {  
  StyledH1,
  StyledP,
  StyledDivEtapa,
} from '../style.js';

import Botao from "../../../components/Botao";
import InputText from "../../../components/InputText";
import TermosUso from "../../../components/TermosUso";
import Etapas from '../../../components/Etapas';
import Select from '../../../components/Select';

import { useRef, useState } from "react";
import { Link } from 'react-router-dom';

export default function Cuidador({
  etapa, 
  setEtapa, 
  verificarCampos, 
  fazerCadastro,
  setCadastro,
  cadastro,
  verificarCPF,
  verificarTelefone,
  verificarSenha,
  verificarTermosUso,
  tema,
  valor
  }) {

  const [valorCep, setCep] = useState('');
    
  const totalEtapas = 3;
  
  const nome = useRef();
  const genero = useRef();
  const telefone = useRef();
  const dataNascimento = useRef();
  
  const cpf = useRef();
  const rua = useRef();
  const numCasa = useRef();
  const cep = useRef();
  const complemento = useRef();
  
  const grupo = useRef();
  const email = useRef();
  const senha = useRef();
  const confirmarSenha = useRef();
  const termosUso = useRef();

  const opcoes = [
    {
      opcao: 'Masculino',
      value: 'MASCULINO'
    }, 
    {
      opcao: 'Feminino', 
      value: 'FEMININO'
    },
    {
      opcao: 'Outro',
      value: 'OUTRO'
    }
  ];

  const opcoesGrupo = [
    {
      opcao: 'IFPI',
      value: 'IFPI'
    }, 
    {
      opcao: 'Protetores de Animais de Parnaíba', 
      value: 'PROTETORES'
    },
  ];

  async function avancarEtapa() {
    setCep('')

    switch (etapa) {
      case 2: {
        const listaRef = [nome, cpf, genero, dataNascimento];

        if (verificarCampos(listaRef)) return;

        const cpfValido = verificarCPF(cpf.current.value);
        if (!cpfValido) return;

        await setCadastro({
          ...cadastro,
          nome_completo: nome.current.value,
          cpf: cpf.current.value,
          genero: genero.current.value,
          data_nascimento: dataNascimento.current.value,
        });

        break;
      }
      case 3: {
        const listaRef = [telefone, rua, numCasa, cep];
        if (verificarCampos(listaRef)) return;

        const telefoneValido = verificarTelefone(telefone.current.value);
        if (!telefoneValido) return; 

        await setCadastro({
          ...cadastro,
          contato: telefone.current.value.replace(/([^0-9])+/g, ""),
          rua: rua.current.value,
          num_casa: numCasa.current.value,
          cep: cep.current.value.replace(/([^0-9])+/g, ""),
          complemento: complemento.current.value
        })

        break;
      }
      case 4: {
        const listaRef = [email, senha, confirmarSenha];
        if (verificarCampos(listaRef)) return;

        const senhaCorreta = verificarSenha(senha, confirmarSenha)
        if (!senhaCorreta) return; 

        const termosAceitos = verificarTermosUso(termosUso);
        if (!termosAceitos) return

        const novoCadastro = {
          ...cadastro,
          email: email.current.value,
          senha: senha.current.value,
          senha_confirmar: confirmarSenha.current.value
        };
        
        const cadastroRealizado = await fazerCadastro("registro-cuidador", novoCadastro);
        if (!cadastroRealizado) return

        break;
      }
    }

    setEtapa(etapa+1);
  };

  function verificarEtapa() {
    switch (etapa) {
      case 1:
        return (
          <>
            <StyledH1>Seja um Cuidador(a)!</StyledH1>
            <StyledP>Você será responsável por oferecer um lar temporário seguro e acolhedor para animais sem abrigo, garantindo seu bem-estar com alimentação adequada, cuidados veterinários, higiene e carinho. Seu papel é essencial para prepará-los para uma adoção responsável.</StyledP>
            <Botao type='submit' tema={tema}>Continuar</Botao>
          </>
        )
        
        case 2:
          return (
            <>
            <Etapas etapa={etapa} totalEtapas={totalEtapas}></Etapas>
            <StyledH1>Dados Pessoais</StyledH1>
            <InputText placeholder='Digite seu nome...' ref={nome} tema={tema} type='text' value={valor} reiniciar={etapa}/>
            <InputText placeholder='Digite seu CPF...' ref={cpf} tema={tema} type='cpf' maxLenght='11' reiniciar={etapa}/>
            <Select opcoes={opcoes} placeholder='Gênero...' ref={genero} tema={tema}/>
            <InputText placeholder='Data de nascimento...' type='date' ref={dataNascimento} tema={tema} reiniciar={etapa}/>
            <Botao type='submit' tema={tema}>Continuar</Botao>
          </>
        )

      case 3:
        return (
          <>
            <Etapas etapa={etapa} totalEtapas={totalEtapas}></Etapas>
            <StyledH1>Dados Pessoais</StyledH1>
            <InputText placeholder='Digite seu telefone...' type='tel' ref={telefone} tema={tema} maxLenght='11' reiniciar={etapa}/>
            <InputText placeholder='Digite seu CEP...' type='cep' ref={cep} tema={tema} maxLenght='8' valor={valorCep} reiniciar={etapa}/>
            <InputText type='endereco' ref={[rua, numCasa]} tema={tema} reiniciar={etapa}/>
            <InputText placeholder='Digite o complemento (opcional)...' type='text' ref={complemento} tema={tema} reiniciar={etapa}/>
            <Botao type='submit' tema={tema}>Continuar</Botao>
          </>
        )
        
        case 4:
          return (
            <>
            <Etapas etapa={etapa} totalEtapas={totalEtapas}></Etapas>
            <StyledH1>Dados Pessoais</StyledH1>
            <Select opcoes={opcoesGrupo} placeholder='Grupo...' ref={grupo} tema={tema}/>
            <InputText placeholder='Digite seu email' type='email' ref={email} tema={tema} reiniciar={etapa}/>
            <InputText placeholder='Digite sua senha...' type='password' ref={senha} tema={tema} reiniciar={etapa}/>
            <InputText placeholder='Confirme sua senha...' type='password' ref={confirmarSenha} tema={tema} reiniciar={etapa}/>
            <TermosUso ref={termosUso}></TermosUso>
            <Botao tema={tema} type='submit'>Finalizar</Botao>
          </>
        )
      case 5:
        return (
          <>
            <StyledH1>Você finalizou o cadastro!</StyledH1>
            <StyledP>Aguarde a aprovação dos administradores e fique de olho no seu email. Doar é um ato de compaixão que alimenta, trata e protege vidas que dependem da nossa bondade para sobreviver. Juntos, fazemos a diferença!</StyledP>            
            <Link to='/login' className='link'>
              <Botao type='button' tema="escuro">Finalizar</Botao>
            </Link>
          </>
        )
    }
  }

  return (
    <StyledDivEtapa action={() => avancarEtapa(etapa)}>
      {verificarEtapa()}
    </StyledDivEtapa>
  )
}