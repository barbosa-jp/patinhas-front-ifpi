import styled from "styled-components";

export const StyledForm = styled.form`
  width: 75%;
  height: fit-content;

  margin: 124px auto;

  padding: 32px;

  background-color: var(--cor-branco);
  box-shadow: 0 0 32px var(--cor-lilas);
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 940px) {
    gap: 16px;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;