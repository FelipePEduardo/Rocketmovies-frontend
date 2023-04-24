import { ChangeEvent } from 'react' 
import { Input } from "../Input";
import { HeaderContainer, HeaderContent, ProfileContainer } from "./styles";
import { Link, NavLink } from "react-router-dom"
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

interface HeaderProps {
  onSearch?: (e:ChangeEvent<HTMLInputElement>) => void
}

export function Header({onSearch}: HeaderProps) {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <HeaderContainer>
      <HeaderContent>
        
        <NavLink to="/">RocketMovies</NavLink>
        <Input 
          type="text" 
          title="Pesquisar pelo título"
          onChange={onSearch} 
        />
        
        <ProfileContainer >
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
            <button onClick={signOut}>sair</button>
          </div>

          <Link to="/profile">
            <img src={avatarUrl} alt={user.name} />
          </Link>
        </ProfileContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}