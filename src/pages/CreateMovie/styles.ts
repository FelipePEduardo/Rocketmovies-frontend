import styled from "styled-components";

export const CreateMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CreateMovieContent = styled.main`
  width: 100%;
  max-width: 112rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin: 4rem auto 8.5rem;

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${({theme}) => theme.COLORS.PINK};
  }

  section {
    h3 {
      margin-bottom: 2.4rem;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-weight: 400;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    font-size: 3.6rem;
    font-weight: 500;
  }

  textarea {
    height: 27rem;

    padding: 1.9rem 1.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 0;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  gap: 4rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 4rem;

  button:first-child {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color:  ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 1.6rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`