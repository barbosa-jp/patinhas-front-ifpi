import {
  StyledDivContainer,
  StyledDivRetangulo,
} from './style.js';


export default function Etapas({totalEtapas, etapa}) {
  const array = Array.from({ length: totalEtapas }, (v, index) => index);

  return (
    <StyledDivContainer>
      {array.map((v, index) => {
        return <StyledDivRetangulo key={`etapa-${v}`} className={index+1 < etapa ? 'rosa' : ''}></StyledDivRetangulo>
      })}  
    </StyledDivContainer>
  )
}