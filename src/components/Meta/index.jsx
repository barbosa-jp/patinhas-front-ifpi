import {
  StyledMeta,
  StyledDescricao,
  StyledGraficos,
  StyledGrafico
} from './style.js';

export default function Meta({meta,valorAtual}) {
  const tamanhoGrafico = () => {
    const tamanho = (valorAtual/meta)*100;
    return `${tamanho}%`
  }

  return (
    <StyledMeta>
      <StyledDescricao><span className='verde'>R${valorAtual}</span> de R${meta}</StyledDescricao>
      <StyledGraficos>
        <StyledGrafico className="valor-atual"  style={{width: tamanhoGrafico()}}>

        </StyledGrafico>
        <StyledGrafico className="meta">

        </StyledGrafico>
      </StyledGraficos>
    </StyledMeta>
  )
}