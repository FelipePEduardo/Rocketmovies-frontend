import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Background, ButtonsContainer, InputContainer, SignInContainer } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'

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

        <ButtonsContainer>
          <Button title="Entrar"/>

          <ButtonText title="Criar conta"/>
        </ButtonsContainer>
      </form>
      <Background />
    </SignInContainer>
  )
}