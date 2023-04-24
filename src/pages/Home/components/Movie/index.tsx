import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MovieContainer } from "./styles";

interface MovieProps {
  movie: {
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
  onClick: () => void
}


export function Movie({ movie, onClick }: MovieProps) { 
  return (
    <MovieContainer onClick={onClick}>
      <h2>{movie.title}</h2>
      <div>
        <span>{movie.rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}</span>
        <span>{movie.rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}</span>
        <span>{movie.rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}</span>
        <span>{movie.rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}</span>
        <span>{movie.rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}</span>
      </div>
      <p>
        {
          movie.description
        }
      </p>

      <ul>
        {
          movie.tags.map(tag => (                   
            <li key={tag.id}>{tag.name}</li>  
          ))
        }
      </ul>              
    </MovieContainer>
  )
}