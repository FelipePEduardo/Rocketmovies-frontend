import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  height: 4.8rem;
  border: 0;
  padding: 1.3rem 1.6rem;
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`