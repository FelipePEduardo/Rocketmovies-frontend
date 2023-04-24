import { ChangeEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ButtonContainer, CardsContainer, Container, MainContainer } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Link } from "react-router-dom"
import { api } from "../../services/api";
import { Movie } from "./components/Movie";

import { useNavigate } from 'react-router-dom'

interface Movies {
  id: number
  title: string
  description: string
  rating: number
  tags: [ 
    {
      id: number
      name: string
    }
  ]
}

export function Home() {
  const [search, setSearch] = useState<string>('')
  const [movies, setMovies] = useState<Movies[]>([])

  const navigate = useNavigate()

  function handleMoviesDetails(id: number) {
    navigate(`/moviePreview/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/moviesNotes?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header onSearch={(e:ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>

      <MainContainer>
        <div>
          <h1>Meus filmes</h1>
          <ButtonContainer>
            <Link to="/createMovie">
              <FiPlus />
              Adicionar filme
            </Link>
          </ButtonContainer>
        </div>

        <CardsContainer>
          {
            movies.map(movie => (
              <Movie key={movie.id} movie={movie} onClick={() => handleMoviesDetails(movie.id)}/>
            ))
          }
        </CardsContainer>
      </MainContainer>
    </Container>
  )
}