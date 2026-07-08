import {
  CardContainer,
  CardImagem,
  BarraInferior,
  SetaContainer,
  StyledNomeIdade,
  ConteudoHover,
  InfoLine,
  InfoText,
} from './style.js';

import IconeSeta from '../../../assets/icone-seta-bege.svg';
import IconePataRosa from '../../../assets/patinha-rosa.svg';
import IconeVacinaRosa from '../../../assets/vacina-rosa.svg';
import IconeMacho from '../../../assets/icone-macho.png';
import IconeFemea from '../../../assets/icone-femea.png';

import Botao from '../../../components/Botao/index.jsx';
import { Link } from 'react-router-dom';

const Card = ({animal}) => {
  return (
    <CardContainer onClick={() => handleCardClick(animal.id)}>
      <CardImagem src={animal.imagem} alt={animal.nome} />

      <BarraInferior>
        <SetaContainer>
          <img src={IconeSeta} alt="icone-seta-bege" />
        </SetaContainer>

        <ConteudoHover>
          <StyledNomeIdade>
            <h1>{animal.nome} <img src={animal.sexo === "MACHO" ? IconeMacho : IconeFemea} alt={`ícone ${animal.sexo}`} className='icone '/></h1>
            <p>{animal.idade} {animal.idade >= 2 ? 'meses' : 'mês'}</p>
          </StyledNomeIdade>
          <InfoLine>
            <img src={IconeVacinaRosa} alt="vacina-rosa" className='icone'/>
            <InfoText>
              {animal.vacinacao === false ? "Não vacinado" : "Vacinado"}<br/>
              {animal.castracao === false ? "Não castrado" : "Castrado"}
            </InfoText>
          </InfoLine>
            <Link to={`/pet-info/${animal.id}`} className='link'>
              <Botao tema="escuro">
                Saiba mais!
              </Botao>
            </Link>
        </ConteudoHover>
      </BarraInferior>
    </CardContainer>
  );
};

export default Card;