import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import { api } from '../../services/api'

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, InputContainer, SignUpContainer } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

export function SignUp() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()

  function handleSignUp(e: FormEvent) {
    e.preventDefault()
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password})
      .then(() => {
        alert("usuário cadastrado com sucesso!")
        navigate('/')
      })
      .catch((error) => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })  
  }

  return (
    <SignUpContainer>
      <form onSubmit={handleSignUp}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <InputContainer>
          <Input 
            type="text" 
            title="Nome"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          >
            <FiUser size={20}/>
          </Input>

          <Input 
            type="email" 
            title="E-mail"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          >
            <FiMail size={20}/>
          </Input>

          <Input 
            type="password" 
            title="Senha"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          >
            <FiLock size={20}/>
          </Input>
        </InputContainer>

        <Button title="Cadastrar" type="submit" />

        <Link to="/">
          <FiArrowLeft size={20}/>
          Voltar para o login
        </Link>
      </form>
      <Background />
    </SignUpContainer>
  )
}