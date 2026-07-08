import styled from "styled-components";

export const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;

  .claro, .claro::placeholder {
    color: var(--cor-roxo);
  }

  .escuro, .escuro::placeholder {
    color: var(--cor-branco);
  }

  @media ((max-width: 400px) or (max-height: 750px)) and (max-aspect-ratio: 1/1) {
    gap: 8px;
  }
`
  
export const StyledDiv = styled.div`
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 8px;
  
  .claro, .claro::placeholder {
    color: var(--cor-roxo);
  }

  .escuro, .escuro::placeholder {
    color: var(--cor-branco);
  }

  .mostrar-senha {
    cursor: pointer;
  }

  @media ((max-width: 400px) or (max-height: 750px)) and (max-aspect-ratio: 1/1) {
    padding: 8px;
    gap: 4px;
  }
`
export const StyledDivRua = styled.div`
  padding: 0px 16px;

  width: 85%;

  display: flex;
  align-items: center;
  gap: 8px;

  .claro, .claro::placeholder {
    color: var(--cor-roxo);
  }

  .escuro, .escuro::placeholder {
    color: var(--cor-branco);
  }

  color: var(--cor-branco)
`;

export const StyledInput = styled.input`
  background: none;

  border: none;
  outline: none;
  padding: 0;
  height: fit-content;
  width: 100%;

  font-size: 20px;
  font-family: var(--fonte-paragrafo);

  &::placeholder{
    opacity: 80%;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1)
  }

  @media ((max-width: 400px) or (max-height: 750px)) and (max-aspect-ratio: 1/1) {
    font-size: 16px;
  }
`

export const StyledInputNumero = styled.input`
  background: none;

  border: none;
  outline: none;

  width: 100%;

  font-size: 20px;
  color: #F2E7D2;
  font-family: 'Inter', sans-serif;
  &::-webkit-calendar-picker-indicator {
    filter: invert(1)
  }

  &::placeholder{
    color: #F2E7D2;
    opacity: 80%;
  }

  @media ((max-width: 400px) or (max-height: 750px)) and (max-aspect-ratio: 1/1) {
    font-size: 16px;
  }
`

export const StyledImgPatinha = styled.img`
  width: 24px;
 `

export const StyledInputCheck = styled.input`
  display: flex;
  justify-content: start;
`
  
export const StyledDivNumero = styled.div`
  padding: 16px;

  width: 15%;

  display: flex;
  align-items: center;
  gap: 8px;
  
  .claro, .claro::placeholder {
    color: var(--cor-roxo);
  }

  .escuro, .escuro::placeholder {
    color: var(--cor-branco);
  }

  .mostrar-senha {
    cursor: pointer;
  }

  @media ((max-width: 400px) or (max-height: 750px)) and (max-aspect-ratio: 1/1) {
    padding: 8px;
    gap: 4px;
  }
`