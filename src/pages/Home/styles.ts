import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.main`
  max-width: 112rem;
  width: 100%;

  margin: 4rem auto 6rem;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 4rem;
  }  
`

export const ButtonContainer = styled.div`
  max-width: 20rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    background: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    padding: 1.3rem ;
    border-radius: 8px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding-right: 1rem;

  max-height: 71.6rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_800} ;
  }

  ::-webkit-scrollbar-thumb {
    background:${({theme}) => theme.COLORS.PINK};
    border-radius: 8px;
  } 
`