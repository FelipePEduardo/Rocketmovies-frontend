import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { Background, InputContainer, SignInContainer } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom"

export function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { signIn } = useAuth()

  function handleSignIn(e: FormEvent) {
    e.preventDefault()

    signIn({ email, password})
  }

  return (
    <SignInContainer>
      <form onSubmit={handleSignIn}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <InputContainer>
          <Input type="email" title="E-mail" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}>
            <FiMail size={20}/>
          </Input>

          <Input type="password" title="Senha" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}>
            <FiLock size={20}/>
          </Input>
        </InputContainer>
      
        <Button title="Entrar" type="submit"/>

        <Link to="/register">
          Criar conta 
        </Link>
      </form>
      <Background />
    </SignInContainer>
  )
}