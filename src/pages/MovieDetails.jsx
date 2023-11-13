import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import BtnBack from 'components/BtnBack/BtnBack';
import Loader from 'components/Loader/Loader';
import { getDetailsMovie } from '../services/api';
import MoviesDetailsDescribe from 'components/MoviesDetailsDescribe/MoviesDetailsDescribe';
const { useEffect } = require('react');

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const response = await getDetailsMovie(movieId);
        setMovies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms();
  }, [movieId]);

  return (
    <div>
      {error && <div>Try to reload the page</div>}
      {isloading && <Loader />}
      <BtnBack to={backLinkHref}> Go back </BtnBack>
      <MoviesDetailsDescribe movies={movies} />

      <Outlet />
    </div>
  );
};
export default MovieDetails;
