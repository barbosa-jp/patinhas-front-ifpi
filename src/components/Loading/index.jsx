import StyledDiv from './style.js';

export default function Loading({tema}) {
  return (
    <StyledDiv>
      <div className={`${tema} aguardando`}></div>
    </StyledDiv>
  )
}