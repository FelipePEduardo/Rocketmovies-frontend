import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { ButtonsContainer, Container, CreateMovieContainer, CreateMovieContent, FormContainer, InputsContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Markers } from "../../components/Markers";

export function CreateMovie() {
  return (
    <CreateMovieContainer>
      <Header />

      <CreateMovieContent>
        <ButtonText title="Voltar">
          <FiArrowLeft />
        </ButtonText>

        <FormContainer>
          <h2>Novo Filme</h2>

          <InputsContainer>
            <Input title="Título" type="text"/>
            <Input 
              title="Sua nota (de 0 a 5)" 
              type="number" 
            />
          </InputsContainer>

          <textarea 
            name="" 
            id="" 
            placeholder="Observações"
          />

          <section>
            <h3>Marcadores</h3>

            <Container>
              <Markers value="React" />
              <Markers isNew placeholder="Novo marcador"/>
            </Container>
          </section>

          <ButtonsContainer>
            <Button title="Excluir Filme"/>
            <Button title="Salvar alterações"/>
          </ButtonsContainer>
        </FormContainer>
      </CreateMovieContent>
    </CreateMovieContainer>
  )
}