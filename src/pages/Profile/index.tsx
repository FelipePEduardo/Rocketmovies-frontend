import { useState, ChangeEvent, FormEvent } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Avatar, Form, InputsContainer, ProfileContainer } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom"
import { api } from '../../services/api'

import { useAuth } from '../../hooks/auth';
import { ButtonText } from '../../components/ButtonText';

export function Profile() {
  const { user, updateProfile } =  useAuth()

  const [name, setName] = useState<string>(user.name)
  const [email, setEmail] = useState<string>(user.email)
  const [oldPassword, setOldPassword] = useState<string>()
  const [newPassword, setNewPassword] = useState<string>()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState<string | null>(avatarUrl)
  const [avatarFile, setAvatarFile] = useState<undefined | {}>(undefined)

  const navigate = useNavigate()

  async function handleUpdate(e: FormEvent) {
    e.preventDefault()

    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file!)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <ProfileContainer>
      <header>
        <ButtonText title='Voltar' onClick={handleBack}>
          <FiArrowLeft />
        </ButtonText>
      </header>

      <Form onSubmit={handleUpdate}>
        <Avatar>
          <img src={avatar!} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera size={20}/>

            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>

        <InputsContainer>     
          <Input 
            type="text" 
            title="Nome" 
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          >
            <FiUser size={20}/>
          </Input>

          <Input 
            type="email" 
            title="E-mail" 
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          >
            <FiMail size={20}/>
          </Input>
        </InputsContainer>   

        <InputsContainer>
          <Input 
            type="password" 
            title="Senha atual"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
          >
            <FiLock size={20}/>
          </Input>

          <Input 
            type="password" 
            title="Nova senha"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
          >
            <FiLock size={20}/>
          </Input>
        </InputsContainer>  

        <Button title="Salvar" type='submit' />
      </Form>
    </ProfileContainer>
  )
}