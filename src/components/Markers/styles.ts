import styled from "styled-components";

export const MarkersContainer = styled.div`
  border: 0;
  padding: 1.6rem;
  border-radius: 10px;
  
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background: ${({ theme, isNew }) => isNew ? "transparent": theme.COLORS.BACKGROUND_700};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}`: "none"};

  input {
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  input, button {
    background: 0;
    border: 0;
  }

  button {
    line-height: 0;
    
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  } 
`