import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0px 96px 160px;

  display: flex;

  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 940px) {
    padding: 16px 0 160px;
  }
`;