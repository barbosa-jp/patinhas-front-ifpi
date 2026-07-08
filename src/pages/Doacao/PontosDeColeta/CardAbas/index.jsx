import {
    StyledCard, 
    StyledTexto, 
    StyledImagem,
    StyledTitulo,
    StyledBotao,
    StyledBotoes
} from './style.js';

import Botao from '../../../../components/Botao';
import BotaoEditar from '../../../../components/BotaoEditar';
import BotaoDeletar from '../../../../components/BotaoDeletar';

import Cookies from 'js-cookie';

export default function CardAbas({
    ponto,
    imagem,
    textoBotao,
    onBotaoClick
}) {
    function mascaraTelefone(tel) {
        let mascara = '(__) _____-____';
        
        for (let i = 0; i < tel.length; i++){
            mascara = mascara.replace('_', tel[i])
        }

        return mascara;
    }

    function editarMateriais(materiais) {
        let materiaisString = '';
        for (let i = 0; i < materiais.length; i++) {
            materiaisString += `${materiais[i]}`;

            if (i < (materiais.length - 1)) {
                materiaisString += ', ';
            }
        }

        return materiaisString;
    }

    return (
        <StyledCard>
            <StyledImagem>
                <img src={imagem} alt={ponto.nome_local}/>
            </StyledImagem>
            <StyledTexto>
                {
                    (Cookies.get('usuario') === ponto.admin_id || Cookies.get('usuario-cargo') === 'ADMIN') &&
                    <StyledBotoes>
                        <BotaoEditar pagina='pontos' infos={ponto}/>
                        <BotaoDeletar pagina='pontos' id={ponto.id}/>
                    </StyledBotoes>
                }
                <StyledTitulo>
                    <h1>{ponto.nome_local}</h1>
                    <span>{ponto.endereco}</span>
                </StyledTitulo>
                {
                    ponto.telefone !== null &&
                    <p><strong>Telefone: </strong>{mascaraTelefone(ponto.telefone)}</p>
                }
                <p><strong>Horário: </strong>{ponto.horario_funcionamento}</p>
                <p><strong>Aceitam: </strong>{editarMateriais(ponto.materiais)}</p>
            </StyledTexto>
            <StyledBotao>
                <Botao onClick={onBotaoClick} tema='claro'>{textoBotao}</Botao>
            </StyledBotao>
        </StyledCard>
    );
}