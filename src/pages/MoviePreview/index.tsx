import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Container, MadeByContainer, MoviePreviewContainer, PersonContainer, TagsContainer, TimeContainer, TitleContainer } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiClock, FiArrowLeft } from 'react-icons/fi'
import { api } from '../../services/api';
import { ButtonText } from '../../components/ButtonText';

interface DataProps {
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
  updated_at: string
}

export function MoviePreview() {
  const [movie, setMovie] = useState({} as DataProps)

  const { id } = useParams()

  const navigate = useNavigate()
  
  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/moviesNotes/${id}`)
      setMovie(response.data)  
    }  

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />

      <MoviePreviewContainer>
        <ButtonText title='Voltar' onClick={handleBack}>
          <FiArrowLeft />
        </ButtonText>

        {
          movie && 
          <section>
            <TitleContainer>
              <h1>{movie.title}</h1>
              <div>
                <span>{movie.rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span>{movie.rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span>{movie.rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span>{movie.rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}</span>
                <span>{movie.rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}</span>
              </div>
            </TitleContainer>

            <MadeByContainer>
              <PersonContainer>
                <img src="https://github.com/FelipePEduardo.png" alt="" />
                <span>Por Felipe Eduardo</span>
              </PersonContainer>

              <TimeContainer>
                <FiClock />
                <span>{movie.updated_at}</span>
              </TimeContainer>
            </MadeByContainer>

            <TagsContainer>
              {
                movie.tags && movie.tags.map(tag => (
                  <span key={tag.id}>{tag.name}</span>
                ))
              }
            </TagsContainer>

            <p>
              {
                movie.description
              }
            </p>          
          </section>
        }
      </MoviePreviewContainer>
    </Container>
  )
}