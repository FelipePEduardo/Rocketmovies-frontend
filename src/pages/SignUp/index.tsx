import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, InputContainer, SignUpContainer } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom"

export function SignUp() {
  return (
    <SignUpContainer>
      <form action="">
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <InputContainer>
          <Input type="text" title="Nome">
            <FiUser size={20}/>
          </Input>

          <Input type="email" title="E-mail">
            <FiMail size={20}/>
          </Input>

          <Input type="password" title="Senha">
            <FiLock size={20}/>
          </Input>
        </InputContainer>

        <Button title="Cadastrar"/>

        <Link to="/">
          <FiArrowLeft size={20}/>
          Voltar para o login
        </Link>
      </form>
      <Background />
    </SignUpContainer>
  )
}