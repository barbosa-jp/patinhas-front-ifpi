import {  
  StyledH1,
  StyledP,
  StyledDivEtapa,
} from '../style.js';

import Botao from "../../../components/Botao";
import InputText from "../../../components/InputText";
import TermosUso from "../../../components/TermosUso";
import Etapas from '../../../components/Etapas';

import { useRef } from "react";
import { Link } from 'react-router-dom';

export default function Doador({
  etapa, 
  setEtapa, 
  verificarCampos, 
  verificarSenha, 
  fazerCadastro,
  setCadastro,
  cadastro,
  verificarTermosUso,
  verificarTelefone,
  tema
  }) {
    
  const totalEtapas = 2;

  const nome = useRef();
  const sobrenome = useRef();
  const email = useRef();
  const senha = useRef();
  const confirmarSenha = useRef();
  const contato = useRef();
  const termosUso = useRef();

  async function avancarEtapa() {
    switch (etapa) {
      case 2: {
        const listaRef = [nome, sobrenome, contato];
        if (verificarCampos(listaRef)) return;

        if (!verificarTelefone(contato.current.value)) return

        setCadastro({
          ...cadastro,
          nome_completo: `${nome.current.value} ${sobrenome.current.value}`,
          contato: contato.current.value.replace(/([^0-9])+/g, ""),
        })

        break;
      }
      case 3: {
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
        
        const cadastroRealizado = await fazerCadastro("registro-doador", novoCadastro);

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
            <StyledH1>Seja um Doador(a)!</StyledH1>
            <StyledP>
              Você está assumindo um papel fundamental na causa. Sua
              contribuição garante a continuidade de trabalhos essenciais, como:
              o resgate de animais em situação de vulnerabilidade, os
              tratamentos veterinários e a manutenção dos abrigos,
              proporcionando alimento, segurança e um ambiente digno enquanto
              aguardam por uma adoção responsável. 
            </StyledP>
            <Botao type='submit' tema='escuro'>Continuar</Botao>
          </>
        );

      case 2:
        return (
          <>
            <Etapas totalEtapas={totalEtapas} etapa={etapa}></Etapas>
            <StyledH1>Dados Pessoais</StyledH1>
              <InputText
                reiniciar={etapa}
                placeholder='Digite seu primeiro nome...'
                type='text'
                ref={nome}
                tema={tema}
              />
              <InputText
                reiniciar={etapa}
                placeholder='Digite seu sobrenome...'
                type='text'
                ref={sobrenome}
                tema={tema}
              />
              <InputText
                reiniciar={etapa}
                placeholder="Digite seu telefone..."
                type="tel"
                ref={contato}
                tema={tema}
                maxLenght='11'
              />
              <Botao type='submit' tema='escuro'>
                Continuar
              </Botao>
          </>
        );
        
      case 3:
        return (
          <>
            <Etapas totalEtapas={totalEtapas} etapa={etapa}></Etapas>
            <StyledH1>Dados Pessoais</StyledH1>
            <InputText
              reiniciar={etapa}
              placeholder="Digite seu email..."
              type="email"
              ref={email}
              tema={tema}
            />
            <InputText
              reiniciar={etapa}
              placeholder="Digite sua senha..."
              type="password"
              ref={senha}
              tema={tema}
            />
            <InputText
              reiniciar={etapa} 
              placeholder="Confirme sua senha..." 
              type="password" 
              ref={confirmarSenha}
              tema={tema}
            />
            <TermosUso ref={termosUso}></TermosUso>
            <Botao tema='escuro' type='submit'>Continuar</Botao>
          </>
        );

      case 4:
        return (
        <>
            <StyledH1>Você finalizou o cadastro!</StyledH1>
            <StyledP>
              Aguarde a aprovação dos administradores e fique de olho no seu
              email. Doar é um ato de compaixão que alimenta, trata e protege
              vidas que dependem da nossa bondade para sobreviver. Juntos,
              fazemos a diferença!
            </StyledP>
            <Link to='/login' className="link">
              <Botao type='button' tema='escuro'>
                Finalizar
              </Botao>
            </Link>
          </>
        );
    }
  }

  return (
    <StyledDivEtapa className='form' action={avancarEtapa}>
      {verificarEtapa()}
    </StyledDivEtapa>
  )
}