import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  
  @media (max-width: 1200px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const StyledImg = styled.img`
  height: 100%;
  max-height: 1180px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledImgMobile = styled.img`
  display: none;
  position: absolute;
  bottom: 0;
  justify-self: center;
  object-fit: cover;

  @media (max-width: 1200px) {
    display: block;
    width: 100vw; 
    max-width: 600px;
    min-height: 100px;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  padding: 0 8vw;

  display: flex;
  flex-direction: column;
  
  gap: 40px;

  @media (max-width: 1200px) {
    width: 100%;
    min-width: 0px;
    gap: 30px;
  }
`
export const StyledH1 = styled.h1`
  margin: 0;  

  color: var(--cor-branco);
  font-size: 60px;
  font-family: var(--fonte-titulo);
  font-weight: 500;

  
  @media (max-width: 550px) {
    font-size: 10vw;
    text-align: center;
  }
`

export const StyledP = styled.p`
  color: var(--cor-branco);

  font-size: 20px;
  text-align: center;
  font-family: 'Inter', sans-serif;

  & a:visited{
    text-decoration: none;
    color: var(--cor-branco);  
  }
`

export const StyledDivBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
