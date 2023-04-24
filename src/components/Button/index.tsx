import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string
  children?: ReactNode
  type: 'button' | 'reset' | 'submit'
  onCLick?: () => void
}

export function Button({ title, children, type, onCLick}: ButtonProps) {
  return (
    <ButtonContainer type={type} onClick={onCLick}>
      {children}
      {title}
    </ButtonContainer>
  )
}