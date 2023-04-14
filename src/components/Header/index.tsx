import { Input } from "../Input";
import { HeaderContainer, HeaderContent, ProfileContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        
        <a href="">RocketMovies</a>
        <Input type="text" title="Pesquisar pelo título" />
        
        <ProfileContainer>
          <div>
            <strong>Felipe Eduardo</strong>
            <span>sair</span>
          </div>

          <img src="https://github.com/FelipePEduardo.png" alt="" />
        </ProfileContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}