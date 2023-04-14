import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: string
  children?: ReactNode
}

export function Button({ title, children }: ButtonProps) {
  return (
    <ButtonContainer type="button">
      {children}
      {title}
    </ButtonContainer>
  )
}