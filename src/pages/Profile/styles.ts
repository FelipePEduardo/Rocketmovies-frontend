import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;

  header {
    height: 14.4rem;
    background: ${({theme}) => theme.COLORS.BACKGROUND_GRADIENT};

    display: flex;
    align-items: center;

    padding: 0 12.4rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({theme}) => theme.COLORS.PINK};
      line-height: 0;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  button {
    margin-top: 2.4rem;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & + & {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  width: 100%;
  max-width: 18.6rem;

  margin: -10rem auto 6.4rem;

  img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 999999px;
  }

  label {
    width: 4.8rem;
    height: 4.8rem;

    background: ${({theme}) => theme.COLORS.PINK};
    border-radius: 999999px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px; 
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: ${({theme}) => theme.COLORS.GRAY_400};
    }
  }
`