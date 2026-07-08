import styled from 'styled-components';

export const Card = styled.div`
  background: var(--cor-branco);
  border-radius: 32px;
  padding: 32px;
  box-shadow: 8px 8px 16px var(--cor-lilas);

  width: 100%;
  max-width: 960px;

  @media (max-width: 460px) {
    padding: 16px;
    border-radius: 16px;
      
    box-shadow: 4px 4px 16px var(--cor-lilas);
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const LadoEsquerdo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvatarContainer = styled.div`
  width: 32px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: var(--cor-roxo);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AvatarImagem = styled.img`
  width: 60%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const Autor = styled.span`
  font-size: 24px;
  font-family: var(--fonte-titulo);
  color: var(--cor-roxo);
`;

export const LadoDireito = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DataPost = styled.span`
  font-size: 16px;
  font-family: var(--fonte-paragrafo);
  color: var(--cor-roxo);
`;

export const TextoConteudo = styled.p`
  font-size: 24px;
  font-family: var(--fonte-paragrafo);
  line-height: 1;
  color: var(--cor-roxo);
  margin-bottom: 16px;
  width: 100%;
  height: fit-content;
  
  @media (max-width: 460px) {
    font-size: 12px;
  }
`;

export const ContainerImagem = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const ImagemPost = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;
`;

export const Rodape = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  padding-top: 8px;
`;

export const TextoCompartilhe = styled.span`
  font-size: 16px;
  font-family: var(--fonte-paragrafo);
  font-weight: 500;
  color: #473469;
`;

export const IconeSocial = styled.img`
  width: 32px;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  padding: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 460px) {
    width: 24px;
  }
`;