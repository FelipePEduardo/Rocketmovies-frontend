import { ReactNode } from "react";
import { ReturnContainer } from "./styles";

interface ReturnProps {
  title: string
  children?: ReactNode
}

export function ButtonText({ title, children }: ReturnProps) {
  return (
    <ReturnContainer type="button">
      {children}
      {title}
    </ReturnContainer>
  )
}