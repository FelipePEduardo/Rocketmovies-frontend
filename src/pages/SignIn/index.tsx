import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, InputContainer, SignInContainer } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom"

export function SignIn() {
  return (
    <SignInContainer>
      <form action="">
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <InputContainer>
          <Input type="email" title="E-mail">
            <FiMail size={20}/>
          </Input>

          <Input type="password" title="Senha">
            <FiLock size={20}/>
          </Input>
        </InputContainer>
      
        <Button title="Entrar"/>

        <Link to="/register">
          Criar conta 
        </Link>
      </form>
      <Background />
    </SignInContainer>
  )
}