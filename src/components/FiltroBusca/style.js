import styled from 'styled-components';

export const FiltroWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  
  padding: 0;
  align-items: center;

  @media (max-width: 960px) {
    gap: 16px;
    padding: 8px 0.5vw;
  }

  @media (max-width: 480px) {
    padding: 8px 0;
  }
`;

export const BotoesSection = styled.div`
  width: 100%;

  display: flex;
  gap: 16px;
  justify-content: end;
  
  @media (max-width: 480px) {
    width: auto;
    justify-content: end;
  }
`;

export const Botao = styled.button`
  background: #473469;
  border: none;
  border-radius: 50%;
  
  width: 48px;
  aspect-ratio: 1 / 1;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.3s ease;
  
  &:hover {
    background: #3a2a55;
    transform: scale(1.05);
  }

  img {
    width: 80%;
    height: auto;
  }

  @media (max-width: 960px) {
    width: 48px;
    height: 48px;
    padding: 12px;
  }
`;