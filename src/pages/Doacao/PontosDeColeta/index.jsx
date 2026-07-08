import CardAbas from './CardAbas/index.jsx';
import IconeMapa from '../../../assets/mapa.svg';
import { useState } from 'react';
import api from '../../../services/api.js';
import FiltroBusca from '../../../components/FiltroBusca'

import {
    StyledDiv
} from './style.js';

function PontosColeta(){
    const [pontos, setPontos] = useState([]);
    const [busca, setBusca] = useState('');

    async function getPontos() {
        const response = await api.doacao.get('/pontos-coleta');
        setPontos(response.data);
    }

    function mostrarPontos() {
        if (pontos.length === 0) {
            getPontos();
        } else {
            const pontosFiltro = handleBusca();
            return (
                pontosFiltro.map(ponto => (
                    <CardAbas
                        ponto={ponto}
                        key={ponto.id}
                        imagem={IconeMapa}
                        textoBotao="Ver Localização"
                        onBotaoClick={() => window.open(ponto.url_map)}
                    />
                ))
            )
        }
    }

    function handleBusca() {
        if (busca !== '') {
        return filtrar();
        } else {
        return pontos;
        }
    };


    function filtrar() {
        const termoMinusculo = busca.toLowerCase();
        const filtrados = pontos.filter(atributo =>
            atributo.nome_local.toLowerCase().includes(termoMinusculo) ||
            atributo.endereco.toString().includes(termoMinusculo) ||
            atributo.horario_funcionamento.toString().includes(termoMinusculo)         
        );
        return filtrados;
    }

    return (
        <StyledDiv>
            <FiltroBusca
                pontosColeta='true'
                buscar={setBusca}
                valorBusca={busca}
                rota={'/cadastro-ponto-coleta'}
            />
            {mostrarPontos()}
        </StyledDiv>
    );
}
export default PontosColeta;