import { 
  StyledDiv,
  StyledForm,
  StyledH1,
  StyledP,
	StyledDivBotoes,
  StyledImg,
  StyledImgMobile,
} from './style';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Botao from '../../components/Botao/';
import BotaoGoogle from '../../components/Botao/loginGoogle';
import InputText from '../../components/InputText/';
import BotaoVoltar from '../../components/BotaoVoltar';
import PaginaTemplate from '../../components/PaginaTemplate';

import fotoCao from '../../assets/login-cao.svg';
import fotoCaoMobile from '../../assets/cao-login-mobile.svg';

import Cookies from 'js-cookie';

import api from "../../services/api";

function Login() {

	const email = useRef();
	const senha = useRef();

  const tema = 'escuro';
  const navegacao = useNavigate();

	async function fazerLogin() {
		try {
			const response = await api.login.post("/login", {
				email: email.current.value,
				senha: senha.current.value
			});

			Cookies.set('token-login', response.data.token, { expires: 1/3 });
      Cookies.set('usuario-cargo', response.data.usuario.cargo);
      Cookies.set('usuario', response.data.usuario.id);
      localStorage.setItem('user-cargo', response.data.usuario.cargo);
      localStorage.setItem('user-nome', response.data.usuario.nome_completo);
      navegacao("/");
      
		} catch (error) {
			alert('E-mail ou senha incorretos');
      console.log(error);
		}
	}

  return (
    <PaginaTemplate tema={tema}>
      <BotaoVoltar tema={tema} onClick={() => window.history.back()}/>
      <StyledDiv>
        <StyledImg src={fotoCao} alt='imagem login' className='img-lado'/>
        <StyledImgMobile src={fotoCaoMobile} alt='imagem login' className='img-baixo'/>
        <StyledForm action={fazerLogin}>
          <StyledH1>Olá, boas-vindas!</StyledH1>
          <InputText type='text' placeholder='Digite seu email...' ref={email} tema={tema}></InputText>
          <InputText type='password' placeholder='Digite seu senha...' ref={senha} tema={tema}></InputText>
          <StyledDivBotoes>
            <Botao type='submit' tema={tema}>Entrar</Botao>
            <BotaoGoogle></BotaoGoogle>
          </StyledDivBotoes>
          <StyledP>Não tem conta? <u><strong><Link className='link' to='/escolha-cargo'>Cadastre-se</Link></strong></u></StyledP>
        </StyledForm>
      </StyledDiv>
    </PaginaTemplate>
  )
}

export default Login;
