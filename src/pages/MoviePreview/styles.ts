import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const MoviePreviewContainer = styled.main`
  max-width: 112rem;
  width: 100%;

  margin: 4rem auto 15.6rem;

  > section {
    margin-top: 2.4rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  gap: 1.9rem;

  h1 {
    font-size: 3.6rem;
    font-weight: 500;
    
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;

    svg {
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
`

export const MadeByContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 4rem;
`

export const PersonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 99999px;
  }
`

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    color: ${({theme})=> theme.COLORS.PINK};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 4rem;

  span {
    padding: 0.8rem 1.6rem;
    background: ${({theme})=> theme.COLORS.BACKGROUND_GRADIENT};
    border-radius: 8px;
  }
`

