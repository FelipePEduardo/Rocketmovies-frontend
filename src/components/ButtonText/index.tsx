import { ReactNode } from "react";
import { ReturnContainer } from "./styles";

interface ReturnProps {
  title: string
  children?: ReactNode
  onClick?: () => void
}

export function ButtonText({ title, children, onClick }: ReturnProps) {
  return (
    <ReturnContainer type="button" onClick={onClick}>
      {children}
      {title}
    </ReturnContainer>
  )
}