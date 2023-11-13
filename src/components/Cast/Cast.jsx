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
  const defaultImg =
    'https://media.istockphoto.com/id/1322220448/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BB%D0%B0%D0%B7.jpg?s=612x612&w=0&k=20&c=QIyjOS5NLKacsYooP28QtmfgmM-RWP1o9wqIMfPS9og=';

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
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
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
