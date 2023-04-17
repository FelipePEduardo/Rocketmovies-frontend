import styled from "styled-components";
import backgroundImg from '../../assets/ImageRocketMovies.png'

export const SignUpContainer = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 16.3rem;

    h1 {
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 6.3rem;
      color: ${({ theme}) => theme.COLORS.PINK}
    }
    
    p {
      font-size: 1.4rem;
      color: ${({ theme}) => theme.COLORS.GRAY_200};
      margin-bottom: 4.8rem;
    }

    h2 {
      font-size: 2.4rem;
      font-weight: 500;

      margin-bottom: 4.8rem;
    } 
    
    a {
      margin-top: 4.2rem;

      text-decoration: none;
      color: ${({ theme}) => theme.COLORS.PINK};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 0.8rem;
  margin-bottom: 2.4rem;
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`