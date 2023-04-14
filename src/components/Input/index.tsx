import { ReactNode } from 'react'
import { InputContainer } from "./styles";

interface InputProps {
  title: string
  type: string
  children?: ReactNode
}

export function Input({ title, type, children }: InputProps) {
  return (
    <InputContainer>
      {children}
      <input type={type} placeholder={title} />
    </InputContainer>
  )
}