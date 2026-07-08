import styled from 'styled-components';

const StyledBotao = styled.button`
  height: 36px;
  width: 100%;

  padding: 16px 32px;

  border-radius: 100px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  
  min-width: 150px;
  
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  font-family: var(--fonte-paragrafo);
  text-decoration: none;
  
  background-color: var(--cor-branco);
  cursor: pointer;

  img {
    width: 24px;
  }

  @media (max-width: 880px) {
    font-size: 16px;
    padding: 8px;

    img {
      width: 24px;
    }
  }

  @media (max-width: 720px) {
    padding: 4px;
  } 
`;

export default StyledBotao;
