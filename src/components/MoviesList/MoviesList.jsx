import { StyledMovList, StyledLink, StyledUl } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledMovList>
      <ul>
        {movies.map(({ id, title, poster_path }) => (
          <StyledUl key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {/* <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={`Poster of ${title}`}
                /> */}
              <p>{title}</p>
            </StyledLink>
          </StyledUl>
        ))}
      </ul>
    </StyledMovList>
  );
};
export default MoviesList;
