import { ChangeEvent, FormEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { ButtonsContainer, Container, CreateMovieContainer, CreateMovieContent, FormContainer, InputsContainer } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Markers } from "../../components/Markers";

import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";

export function CreateMovie() {
  const [tags, setTags] = useState<string[]>([])
  const [newMarker, setNewMarker] = useState<string>("")

  const [title, setTitle] = useState<string>("")
  const [rating, setRating] = useState<number>(0)
  const [description, setDescription] = useState<string>("")

  const navigate = useNavigate()

  function handleAddMarker() {
    setTags(state => [...state, newMarker])
    setNewMarker('')
  }

  function handleRemoveMarker(deleted: string) {
    setTags(state => state.filter(item => item !== deleted))
  }
  
  async function handleCreateNewNote(e: FormEvent) {
    e.preventDefault()

    if(!title) {
      return alert("Digite o título do filme.")
    }

    if(!rating) {
      return alert("Digite a nota do filme.")
    }

    if(newMarker) {
      return alert("Você deixou uma tag no campo para adicionar mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    await api.post("/moviesNotes", { 
      title,
      rating,
      description,
      tags
    })

    alert("Nota criada com sucesso!")
    navigate("/")
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <CreateMovieContainer>
      <Header />

      <CreateMovieContent>
        <ButtonText title="Voltar" onClick={handleBack}>
          <FiArrowLeft />
        </ButtonText>

        <FormContainer onSubmit={handleCreateNewNote}>
          <h2>Novo Filme</h2>

          <InputsContainer>
            <Input 
              title="Título" 
              type="text"
              onChange={(e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <Input 
              title="Sua nota (de 0 a 5)" 
              type="number" 
              max={5}
              min={1}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setRating(e.target.valueAsNumber)}
            />
          </InputsContainer>

          <textarea 
            placeholder="Observações"
            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />

          <section>
            <h3>Marcadores</h3>

            <Container>
              {
                tags.map((tag, index) => (
                  <Markers 
                    key={index}
                    value={tag}
                    onClick={() => handleRemoveMarker(tag)}
                  />
                ))
              }
              {
                tags.length < 3 &&
                <Markers 
                  isNew 
                  placeholder="Novo marcador"
                  value={newMarker}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => setNewMarker(e.target.value)}
                  onClick={handleAddMarker}
                />
              }
            </Container>
          </section>

          <ButtonsContainer>
            <Button title="Excluir Filme" type="button" onCLick={handleBack}/>
            <Button title="Salvar alterações" type="submit"/>
          </ButtonsContainer>
        </FormContainer>
      </CreateMovieContent>
    </CreateMovieContainer>
  )
}