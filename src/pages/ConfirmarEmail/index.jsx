import { useEffect, useState } from 'react';
import {
  StyledDiv,
  StyledImg,
  StyledH1,
  StyledP,
  StyledMain,
  StyledConteudo
} from './style.js';

import PaginaTemplate from '../../components/PaginaTemplate/index.jsx';
import BotaoVoltar from '../../components/BotaoVoltar/index.jsx';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

import Imagem from '../../assets/foto-cachorros-felizes.jpg';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function ConfirmarEmail() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('carregando');

  useEffect(() => {
    const confirmarEmail = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error || !data.session) {
          setStatus('erro');
          return;
        }

        setStatus('sucesso');
      } catch (err) {
        console.error(err);
        setStatus('erro');
      }
    };

    confirmarEmail();
  }, []);

  return (
    <PaginaTemplate tema="claro">
      <BotaoVoltar tema="claro" onClick={() => navigate('/doacao')} />
      <StyledMain>
        <StyledDiv>
          <StyledImg src={Imagem} alt="cachorro" />
          <StyledConteudo>
            {status === 'carregando' && (
              <StyledH1>Confirmando seu email...</StyledH1>
            )}

            {status === 'sucesso' && (
              <>
                <StyledH1>Seu email foi confirmado!</StyledH1>
                <StyledP>
                  Em nome de todos os animais que ajudamos, nosso sincero
                  agradecimento. Ela significa esperança e cuidado.
                </StyledP>
              </>
            )}

            {status === 'erro' && (
              <>
                <StyledH1>Não foi possível confirmar seu email</StyledH1>
                <StyledP>
                  O link pode ter expirado ou já foi utilizado. Tente se
                  cadastrar novamente ou entre em contato com o suporte.
                </StyledP>
              </>
            )}
          </StyledConteudo>
        </StyledDiv>
      </StyledMain>
    </PaginaTemplate>
  );
}