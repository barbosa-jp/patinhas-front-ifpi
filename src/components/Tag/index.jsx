import { StyledSpan } from "./style"

export default function Tag({fundo, children}) {
  return <StyledSpan className={fundo}>{children}</StyledSpan>
}