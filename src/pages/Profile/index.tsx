import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Avatar, Form, InputsContainer, ProfileContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"

export function Profile() {
  return (
    <ProfileContainer>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/FelipePEduardo.png" alt="" />

          <label htmlFor="avatar">
            <FiCamera size={20}/>

            <input id="avatar" type="file"/>
          </label>
        </Avatar>

        <InputsContainer>     
          <Input type="text" title="Nome">
            <FiUser size={20}/>
          </Input>

          <Input type="email" title="E-mail">
            <FiMail size={20}/>
          </Input>
        </InputsContainer>   

        <InputsContainer>
          <Input type="password" title="Senha atual">
            <FiLock size={20}/>
          </Input>

          <Input type="password" title="Nova senha">
            <FiLock size={20}/>
          </Input>
        </InputsContainer>  

        <Button title="Salvar"/>
      </Form>
    </ProfileContainer>
  )
}