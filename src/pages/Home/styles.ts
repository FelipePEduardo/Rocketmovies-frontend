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

export const CardContainer = styled.button`
  display: flex;
  flex-direction: column;

  background: ${({theme}) => theme.COLORS.BACKGROUND_GRADIENT};
  padding: 3.2rem;
  border: 0;
  border-radius: 16px;

  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};

    margin-bottom: 0.8rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    svg {
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  p {
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin: 1.5rem 0;

    text-align: left;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical; 
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    li {
      padding: 0.5rem 1.6rem;
      border-radius: 8px;
      background: ${({theme}) => theme.COLORS.GRAY_400};

      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`