import { StyledMovList, StyledLink, StyledUl } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledMovList>
      <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <StyledUl key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  sizes="150px"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={`Poster of ${title}`}
                />
                <h2>{title}</h2>
              </StyledLink>
            </StyledUl>
          );
        })}
      </ul>
    </StyledMovList>
  );
};
export default MoviesList;
