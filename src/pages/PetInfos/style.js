import styled from  'styled-components';

export const StyledMain = styled.main`
  width: auto;
  height: 100%;

  margin: 0 96px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (max-width: 920px) {
    height: auto;

    flex-direction: column;
    margin: 128px 64px;
    gap: 16px;
    justify-content: baseline;
  }

  @media (max-width: 460px) {
    margin: 96px 32px;
    gap: 8px;
  }
`;

export const StyledImagemPrincipal = styled.img`
  width: 50vw;
  min-width: 400px;
  aspect-ratio: 1 / 1;
  border-radius: 32px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 920px) {
    width: 30vw;
    min-width: 320px;
  }

  @media (max-width: 460px) {
    width: 100%;
    max-width: 240px;
    min-width: 0;
  }
`;

export const StyledConteudo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;  
  justify-content: center;
`;

export const StyledAnimal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledNome = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 32px;
    height: auto;
    
    @media (max-width: 460px) {
      width: 24px;
    }
  }
`;

export const StyledH1 = styled.h1`
  font-family: var(--fonte-titulo);
  font-weight: 500;
  font-size: 40px;
  color: var(--cor-roxo);

  @media (max-width: 460px) {
    font-size: 32px;
  }
`;

export const StyledDescricao = styled.p`
  overflow-y: auto;
  max-height: 320px;

  font-size: 20px;
  font-family: var(--fonte-paragrafo);
  color: var(--cor-roxo);

  @media (max-width: 460px) {
    font-size: 16px;
  }
`

export const StyledTags = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledCuidador = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledContato = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--cor-roxo);
  font-family: var(--fonte-paragrafo);
`

export const StyledWhats = styled.a`
  background-color: var(--cor-verde);
  display: flex;
  justify-content: center;
  border-radius: 100%;

  width: 64px;
  aspect-ratio: 1 / 1;

  & > img{
    width: 50%;
  }
`;

export const StyledInformacoes = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;  

  h2 {
    font-weight: 500;
    font-size: 24px;

    @media (max-width: 460px) {
      font-size: 16px;
    }
  }
`;

export const StyledBotoes = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: end;
`;