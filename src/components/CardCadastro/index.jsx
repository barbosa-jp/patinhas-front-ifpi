import {
  StyledForm,
} from './style.js';

function CardCadastro({children, action}) {
 
  return <StyledForm action={action}>
    {children}
  </StyledForm>
}

export default CardCadastro;