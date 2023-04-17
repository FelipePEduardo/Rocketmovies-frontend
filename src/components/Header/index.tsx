import { Input } from "../Input";
import { HeaderContainer, HeaderContent, ProfileContainer } from "./styles";
import { Link } from "react-router-dom"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        
        <a href="">RocketMovies</a>
        <Input type="text" title="Pesquisar pelo título" />
        
        <ProfileContainer >
          <div>
            <Link to="/profile">
              <strong>Felipe Eduardo</strong>
            </Link>
            <span>sair</span>
          </div>

          <Link to="/profile">
            <img src="https://github.com/FelipePEduardo.png" alt="" />
          </Link>
        </ProfileContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}