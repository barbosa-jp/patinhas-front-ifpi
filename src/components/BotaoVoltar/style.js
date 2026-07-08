import styled from 'styled-components';

export const StyledBotaoVoltar = styled.button`
  height: 50px;
  position: absolute;
  top: 4vh;
  right: 6vw;

  padding: 8px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: var(--cor-branco);

  border-radius: 100px;
  border: none;

  font-size: 24px;
  font-weight: bold;
  color: #473469; 
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  z-index: 1;

  @media (max-width: 500px) {
    width: 115px;
    height: 40px;
    font-size: 20px;
  }
`
export const StyledImgPatinha = styled.img`
  width: 24px;
  
  @media (max-width: 400px) {
    width: 24px;
  }
 `