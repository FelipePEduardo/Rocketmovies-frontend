import { ReactNode } from 'react'
import { InputContainer } from "./styles";
import { ChangeEvent } from "react";

interface InputProps {
  title: string
  type: string
  children?: ReactNode
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  max?: number
  min?: number
}

export function Input({ title, type, children, onChange, value, max, min }: InputProps) {
  return (
    <InputContainer>
      {children}
      <input 
        type={type} 
        placeholder={title} 
        onChange={onChange} 
        value={value}
        max={max}
        min={min}
      />
    </InputContainer>
  )
}