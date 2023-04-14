import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  border: 0;
  border-radius: 10px;
  background: ${({ theme }) => theme. COLORS.BACKGROUND_700};
  padding: 1.6rem 1.8rem;

  font-size: 1.4rem;
  color: ${({ theme }) => theme. COLORS.GRAY_300};

  input {
    width: 100%;

    background: 0;
    border: 0;
    color: ${({ theme }) => theme. COLORS.GRAY_100};
  }
`