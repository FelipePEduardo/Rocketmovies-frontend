import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Background, ButtonsContainer, InputContainer, SignUpContainer } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

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

        <ButtonsContainer>
          <Button title="Cadastrar"/>

          <ButtonText title="Voltar para o login">
            <FiArrowLeft size={20}/>
          </ButtonText>
        </ButtonsContainer>
      </form>
      <Background />
    </SignUpContainer>
  )
}