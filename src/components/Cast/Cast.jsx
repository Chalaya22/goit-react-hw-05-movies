import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledCastsList,
  StyledCastsItem,
  StyledCastsImg,
} from './Cast.styled';
import Loader from 'components/Loader/Loader';
import NotFound from 'components/NotFound/NotFound';
import { getCastMovie } from '../../services/api';
const { useEffect } = require('react');

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      setIsLoading(true);
      try {
        const response = await getCastMovie(movieId);
        setActors(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isloading && <Loader />}
      <StyledCastsList>
        {actors &&
          actors.cast.map(({ id, profile_path, name, character }) => (
            <StyledCastsItem key={id}>
              <StyledCastsImg
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={`${name}`}
              />
              <h4>{name}</h4>
              <p>Character: {character}</p>
            </StyledCastsItem>
          ))}
      </StyledCastsList>
      {!actors && <NotFound />}
    </>
  );
};
export default Cast;
