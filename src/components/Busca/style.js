import styled from 'styled-components';

export const InputContainer = styled.form`
  width: 60%;
  padding: 8px;
  
  display: flex;
  gap: 24px;

  border-bottom: 2px solid #473469;
  
  @media (max-width: 960px) {
    width: 100%;
    max-width: 200px;
    gap: 16px;
  }

  button {
    background: none;
    border: none;
  }
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  
  width: 100%;

  font-size: 24px;
  color: #473469;
  font-family: 'Inter', sans-serif;

  &::placeholder {
    color: #AE8FBA80;
    opacity: 80%;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }  
`;

export const Icone = styled.img`
  width: 24px;
  height: auto;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 16px;
  }
`;