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
import { useNavigate } from 'react-router';

function CadastroPontoColeta() {
  const refNome = useRef();
  const refNumeroLocal = useRef();
  const refNumero = useRef();
  const refObservacoes = useRef();
  const refHorarioInicio = useRef();
  const refHorarioFim = useRef();
  const refRua = useRef();
  const refEstado = useRef();
  const refCidade = useRef();

  const navigate = useNavigate();

  const [materiais, setMateriais] = useState({
    medicamentos: false,
    racao: false,
    roupas: false,
    reciclavel: false
  });

  const enumMateriais = {
    medicamentos: 'MEDICAMENTOS',
    racao: 'RACAO',
    roupas: 'ROUPAS',
    reciclavel: 'MATERIAL RECICLAVEL'
  }

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
      console.log(Cookies.get('usuario-cargo'))
      
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
        ativo: true,
        nome_local: refNome.current.value,
        endereco: `${refRua.current.value}, ${refNumeroLocal.current.value} - ${refCidade.current.value}-${refEstado.current.value}`,
        telefone: refNumero.current.value,
        observacoes: refObservacoes.current.value,
        horario_funcionamento: `${refHorarioInicio.current.value} - ${refHorarioFim.current.value}`,
        materiais: materiaisArray,
      };
      
      const response = await api.doacao.post('/registro-coleta', dados, {
        headers: { "Authorization": `Bearer ${cookie}`, "Content-Type": "application/json"}
      });

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
            />

            <Input 
              type="endereco"
              placeholder="Digite a rua do ponto..."
              tema="claro"
              ref={[refRua, refNumeroLocal]}
              required
            />
            
            <StyledLinha>
              <Input 
                placeholder="Digite a cidade..."
                type="string"
                tema="claro"
                ref={refCidade}
                required
              />
            </StyledLinha>
            <StyledLinha>
              <Input 
                placeholder="Digite o estado..."
                type="string"
                tema="claro"
                ref={refEstado}
                required
              />
            </StyledLinha>

            <StyledLinha>
              <Input 
                placeholder="Digite um número de contato..."
                type="text"
                tema="claro"
                ref={refNumero}
                required
              />
            </StyledLinha>

            <Input 
              placeholder="Observações (opcional)"
              type="string"
              tema="claro"
              ref={refObservacoes}
            />

            <StyledLinhaHorario>
              <p>Horário de Funcionamento:</p>
              <Input 
                placeholder="hh:mm"
                type="string"
                tema="claro"
                ref={refHorarioInicio}
                className="input-horario"
              />
              <p>às</p>
              <Input 
                placeholder="hh:mm"
                type="string"
                tema="claro"
                ref={refHorarioFim}
                className="input-horario"
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
}

export default CadastroPontoColeta;