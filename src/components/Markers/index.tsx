import { ChangeEvent } from "react";
import { MarkersContainer } from "./styles"
import { FiPlus, FiX } from 'react-icons/fi'

interface MarkersProps {
  isNew?: boolean
  value?: string
  onClick?: () => void
  placeholder?: string
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void
}

export function Markers({ isNew, value, onClick, placeholder, onChange}: MarkersProps) {
  return (
    <MarkersContainer isNew={isNew}>
      <input 
        type="text" 
        value={value} 
        readOnly={!isNew}
        placeholder={placeholder}
        onChange={onChange}
      />
    
      <button onClick={onClick} type="button">
        { isNew ? <FiPlus size={20} /> : <FiX size={20} /> }
      </button>
    </MarkersContainer>
  )
}