import {
  StyledMain,
  StyledForm,
  StyledLinha,
  StyledLinhaHorario,
  StyledCheckboxGrupo,
  StyledCheckboxLabel,
} from './style';

import PaginaTemplate from '../../components/PaginaTemplate';
import BotaoVoltar from '../../components/BotaoVoltar';
import CardCadastro from '../../components/CardCadastro';
import Input from '../../components/InputText';
import Botao from '../../components/Botao';

import api from '../../services/api';
import Cookies from 'js-cookie';

import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function EditarPonto() {
  const local = useLocation();
  const { infos } = local.state;

  const navigate = useNavigate();

  const enderecoSeparado = infos.endereco.split(',');
  const horario = infos.horario_funcionamento.split(' - ')

  const rua = enderecoSeparado[0]
  const numero = enderecoSeparado[1].split('-')[0];
  const cidade = enderecoSeparado[1].split('-')[1];
  const estado = enderecoSeparado[1].split('-')[2];

  const refNome = useRef();
  const refNumeroLocal = useRef();
  const refNumero = useRef();
  const refObservacoes = useRef();
  const refHorarioInicio = useRef();
  const refHorarioFim = useRef();
  const refRua = useRef();
  const refEstado = useRef();
  const refCidade = useRef();

  const enumMateriais = {
    medicamentos: 'MEDICAMENTOS',
    racao: 'RACAO',
    roupas: 'ROUPAS',
    reciclavel: 'MATERIAL RECICLAVEL'
  }

  const [materiais, setMateriais] = useState({
    medicamentos: infos.materiais.includes(enumMateriais.medicamentos),
    racao: infos.materiais.includes(enumMateriais.racao),
    roupas: infos.materiais.includes(enumMateriais.roupas),
    reciclavel: infos.materiais.includes(enumMateriais.reciclavel),
  });

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setMateriais(prev => ({
      ...prev,
      [name]: checked
    }));
  }

  function verificarCampos(lista) {
    const camposVazios = lista.map(campo => {
      return campo.ref.current.value;
    });

    if (camposVazios.includes('')) {
      alert('Há campos obrigatórios vazios!');
    }

    return camposVazios.includes('');
  }

  async function cadastrar() {
    try {
      const cookie = Cookies.get('token-login');
      
      const listaRefs = [
        { ref: refNome, nome: 'nome_local' },
        { ref: refNumeroLocal, nome: 'numero_local' },
        { ref: refNumero, nome: 'numero' },
        { ref: refHorarioInicio, nome: 'horario_inicio' },
        { ref: refHorarioFim, nome: 'horario_fim' },
        { ref: refRua, nome: 'rua' },
        { ref: refCidade, nome: 'cidade' },
        { ref: refEstado, nome: 'estado' },
      ];
      
      if (verificarCampos(listaRefs)) return;

      const materiaisSelecionados = Object.entries(materiais)
        .filter(([_, selecionado]) => selecionado)
        .map(([nome]) => {
          return enumMateriais[nome];
        })
        .join(',');

      const materiaisArray = materiaisSelecionados.split(',');
      
      const dados = {
        nome_local: refNome.current.value,
        endereco: `${refRua.current.value},${refNumeroLocal.current.value}-${refCidade.current.value}-${refEstado.current.value}`,
        telefone: refNumero.current.value,
        observacoes: refObservacoes.current.value,
        horario_funcionamento: `${refHorarioInicio.current.value} - ${refHorarioFim.current.value}`,
        materiais: materiaisArray
      };

      const response = await api.doacao.patch(
        `/edit-coleta/${infos.id}`, 
        dados, 
        {headers: { "Authorization": `Bearer ${cookie}`, "Content-Type": "application/json"}}
      );

      alert(response.data.message || 'Ponto de coleta cadastrado com sucesso!');
      
      refNome.current.value = '';
      refNumero.current.value = '';
      refObservacoes.current.value = '';
      refHorarioInicio.current.value = '';
      refHorarioFim.current.value = '';
      setMateriais({
        medicamentos: false,
        racao: false,
        roupas: false,
        reciclavel: false
      });

      navigate(-1);
    } catch (err) {
      console.error("Erro ao cadastrar ponto de coleta:", err);
      if (err.response) {
        alert(`Erro: ${err.response.data.mensagem || err.response.data.message || "Erro ao cadastrar"}`);
      } else {
        alert("Erro inesperado:", err.message);
      }
    }
  }

  const tema = 'claro';

  return (
    <PaginaTemplate tema={tema} scroll='scroll'>
      <StyledMain>
        <BotaoVoltar tema='claro' />
        <CardCadastro action={cadastrar}>
          <StyledForm>
            <h1>Cadastro de Ponto de Coleta</h1>

            <Input 
              placeholder="Digite o nome do ponto..."
              type="string"
              tema="claro"
              ref={refNome}
              required
              value={infos.nome_local}
            />

            <Input 
              type="endereco"
              tema="claro"
              ref={[refRua, refNumeroLocal]}
              required
              value={[rua, numero]}
            />
            
            <StyledLinha>
              <Input 
                placeholder="Digite a cidade..."
                type="string"
                tema="claro"
                ref={refCidade}
                required
                value={cidade}
              />
            </StyledLinha>
            <StyledLinha>
              <Input 
                placeholder="Digite o estado..."
                type="string"
                tema="claro"
                ref={refEstado}
                required
                value={estado}
              />
            </StyledLinha>

            <StyledLinha>
              <Input 
                placeholder="Digite um número de contato..."
                type="text"
                tema="claro"
                ref={refNumero}
                required
                value={infos.telefone}
              />
            </StyledLinha>

            <Input 
              placeholder="Observações (opcional)"
              type="string"
              tema="claro"
              ref={refObservacoes}
              value={infos.observacoes}
            />

            <StyledLinhaHorario>
              <p>Horário de Funcionamento:</p>
              <Input 
                placeholder="hh:mm"
                type="string"
                tema="claro"
                ref={refHorarioInicio}
                className="input-horario"
                value={horario[0]}
              />
              <p>às</p>
              <Input 
                placeholder="hh:mm"
                type="string"
                tema="claro"
                ref={refHorarioFim}
                className="input-horario"
                value={horario[1]}
              />
            </StyledLinhaHorario>

            <label>Materiais aceitos:</label>
            <StyledCheckboxGrupo>
              <StyledCheckboxLabel>
                <input 
                  type="checkbox" 
                  name="medicamentos"
                  checked={materiais.medicamentos}
                  onChange={handleCheckboxChange}
                />
                <p>Medicamentos</p>
              </StyledCheckboxLabel>
              <StyledCheckboxLabel>
                <input 
                  type="checkbox" 
                  name="racao"
                  checked={materiais.racao}
                  onChange={handleCheckboxChange}
                />
                <p>Ração</p>
              </StyledCheckboxLabel>
              <StyledCheckboxLabel>
                <input 
                  type="checkbox" 
                  name="roupas"
                  checked={materiais.roupas}
                  onChange={handleCheckboxChange}
                />
                <p>Roupas</p>
              </StyledCheckboxLabel>
              <StyledCheckboxLabel>
                <input 
                  type="checkbox" 
                  name="reciclavel"
                  checked={materiais.reciclavel}
                  onChange={handleCheckboxChange}
                />
                <p>Material reciclável</p>
              </StyledCheckboxLabel>
            </StyledCheckboxGrupo>

            <Botao type="submit" tema="claro">Enviar</Botao>
          </StyledForm>
        </CardCadastro>
      </StyledMain>
    </PaginaTemplate>
  );
};