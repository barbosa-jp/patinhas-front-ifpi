import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  margin: 96px 0;
  padding: 0 96px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 960px) {
    padding: 0 24px;
    gap: 16px;
  }
`;

/*export const EstadoCarregamento = styled.div`
  text-align: center;
  padding: 40px;
  color: #473469;
  font-size: 16px;
`;*/

export const EstadoVazio = styled.div`
  text-align: center;
  padding: 40px;
  color: #473469;
  font-style: italic;
`;

export const StyledCarregando = styled.div`
  width: 100%;
  height: 24px;

  margin: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
`;