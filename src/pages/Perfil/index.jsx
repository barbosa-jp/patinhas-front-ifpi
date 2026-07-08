import { 
  StyledMenu,
  StyledIcone,
  StyledUl,
  StyledPerfil,
  StyledInfo,
  StyledMain,
  StyledDiv,
  StyledCards,
  StyledOpcoes,
  StyledCarregando,
} from './style';

import { useState, useEffect } from 'react';

import BotaoVoltar from '../../components/BotaoVoltar';
import PaginaTemplate from '../../components/PaginaTemplate';
import Loading from '../../components/Loading';
import Busca from '../../components/Busca';
import Card from './Card';
import MenuBurguer from '../../components/MenuBurguer';

import IconePatinha from '../../assets/patinha-roxo.svg';
import IconeEditar from '../../assets/icone-editar.svg';
import IconeLogout from '../../assets/icone-logout.svg';
import FotoTeste from '../../assets/foto-teste.png';

import api from "../../services/api";
import Cookies from 'js-cookie';

function Perfil() {
  const tema = 'claro';

  const cargo = localStorage.getItem('user-cargo');
  const nome = localStorage.getItem('user-nome');

  const cargos = {
    'ADMIN': {
      nome: 'Administrador',
      abas: ['Pendentes', 'Analisados'],
      menu: [
        {nome: 'Cuidadores', codigo: 'Cuidadores', tipo: 'USER_CUIDADOR'},
        {nome: 'Animais', codigo: 'Animais', tipo: 'ANIMAL'},
        {nome: 'Doações', codigo: 'Doacoes', tipo: 'DOACAO'},
        {nome: 'Posts', codigo: 'Posts', tipo: 'POSTS'},
      ],
    },
    'CUIDADOR': {
      nome: 'Cuidador',
      abas: ['Pendentes', 'Analisados'],
      menu: [
        {nome: 'Animais', codigo: 'Animais', tipo: 'ANIMAL'},
        {nome: 'Doações', codigo: 'Doacoes', tipo: 'DOACAO'},
        {nome: 'Posts', codigo: 'Posts', tipo: 'POSTS'},
      ],
    },
    'DOADOR': {
      nome: 'Doador',
      abas: ['Realizadas'],
      menu: [{nome: 'Doações', codigo: 'Doacoes', tipo: 'DOACAO'}],
    },
  }
  
  window.addEventListener('resize', () => {setLarguraTela(window.innerWidth)})
  
  const abas = cargos[cargo].abas;
  const menu = cargos[cargo].menu;
  
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);
  const [opcaoMenu, setOpcaoMenu] = useState(menu[0].codigo);
  const [opcaoCards, setOpcaoCards] = useState(abas[0]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (cards.length === 0) {
      const cookie = Cookies.get('token-login');
      buscarCards(cookie)
    }
  });

	async function buscarCards(cookie) {
		try {
        const response = await api.usuario.get(
          '/perfil',
          {headers: {"Authorization": `Bearer ${cookie}`}} 
        );
        console.log(response.data)
        setCards(response.data);
		} catch (error) {
      console.log(error);
		}
	};

  function logout() {
    localStorage.clear();
    Cookies.remove('token-login');
    window.history.back()
  }

  return (
    <PaginaTemplate tema={tema}>
      <BotaoVoltar tema={tema}/>
      <StyledMain>
        {
          larguraTela > 980 ?
          <StyledMenu>
            <div className='menu-div top'>
              <StyledPerfil>
                <img src={FotoTeste} alt="foto perfil" />
                <StyledInfo>
                  <h1>{cargos[cargo].nome}</h1>
                  <p>{nome}</p>
                </StyledInfo>
              </StyledPerfil>
              <StyledUl>
                {
                  menu.map((opcao) => 
                    <li 
                      key={opcao.nome}
                      className={opcao.codigo === opcaoMenu ? 'ativado' : ''}
                      onClick={() => setOpcaoMenu(opcao.codigo)}
                      onKeyDown={() => setOpcaoMenu(opcao.codigo)}
                    >
                      <StyledIcone src={IconePatinha} alt="ícone patinhas"/>
                      {opcao.nome}
                    </li>
                  )
                }
                </StyledUl>            
            </div>
            <div className='menu-div bottom'>
              <StyledUl>
                <li className='logout' onClick={logout} onKeyUp={logout}>
                  <StyledIcone src={IconeLogout} alt="icone logout" />
                  Sair
                </li>
              </StyledUl>
            </div>
          </StyledMenu> :
          <MenuBurguer>
            <StyledMenu>
              <div className='menu-div top'>
                <StyledPerfil>
                  <img src={FotoTeste} alt="foto perfil" />
                  <StyledInfo>
                    <h1>{cargos[cargo].nome}</h1>
                    <p>{nome}</p>
                  </StyledInfo>
                </StyledPerfil>
                <StyledUl>
                  {
                    menu.map((opcao) => 
                      <li 
                        key={opcao.nome}
                        className={opcao.codigo === opcaoMenu ? 'ativado' : ''}
                        onClick={() => { setOpcaoMenu(opcao.codigo) }}
                        onKeyDown={() => setOpcaoMenu(opcao.codigo)}
                      >
                        <StyledIcone src={IconePatinha} alt="ícone patinhas"/>
                        {opcao.nome}
                      </li>
                    )
                  }
                  </StyledUl>            
              </div>
              <div className='menu-div bottom'>
                <StyledUl>
                  <li className='logout' onClick={logout} onKeyUp={logout}>
                    <StyledIcone src={IconeLogout} alt="icone logout" />
                    Sair
                  </li>
                </StyledUl>
              </div>
            </StyledMenu>
          </MenuBurguer>
        }
        <StyledDiv>
          <Busca></Busca>
          <StyledOpcoes>
            {
              abas.map((opcao) => 
                <li 
                  key={opcao} 
                  className={opcao === opcaoCards ? 'selecionado' : ''} 
                  onClick={() => setOpcaoCards(opcao)} 
                  onKeyDown={() => setOpcaoCards(opcao)}
                >
                  {opcao}
                </li>
              )
            }
          </StyledOpcoes>
          <StyledCards>
            { 
              cards.length === 0 ?
              <StyledCarregando><Loading tema='escuro'></Loading></StyledCarregando> :
              cards[opcaoMenu] !== undefined ?
              cards[opcaoMenu].map((card) => {
                if (opcaoCards === 'Pendentes' && card.status_admin !== 'PENDENTE') return '';
                if (opcaoCards === 'Analisados' && card.status_admin === 'PENDENTE') return '';
                return <Card 
                        key={card.id}
                        card={card}
                        cargo={cargo} 
                        opcaoMenu={opcaoMenu}
                        api={api}
                        buscarCards={buscarCards}
                      >  
                      </Card>;
              }) :
              <p className='nada'>Nada encontrado!</p>
            }
          </StyledCards>
        </StyledDiv>
      </StyledMain> 
    </PaginaTemplate>
  )
}

export default Perfil;
