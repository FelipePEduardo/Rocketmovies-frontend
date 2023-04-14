import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6.4rem;

  max-width: 112rem;
  width: 100%;
  margin: 0 auto;

  > a {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;

    color: ${({ theme }) => theme. COLORS.PINK};
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 0.9rem;

  img {
    width: 6.3rem;
    height: 6.3rem;

    border-radius: 999999px;
    border: 1px solid ${({ theme }) => theme. COLORS.BORDER};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 1.4rem;
      line-height: 1.8rem;
      white-space: nowrap;
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme. COLORS.GRAY_300};
    }
  }
`