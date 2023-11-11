import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchMovies } from '../services/api';

const Movies = () => {
  const [serchedMovies, setSerchedMovies] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');

  const onformSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!queryValue) return;
    const getFilms = async () => {
      setIsLoading(true);
      try {
        const response = await getSearchMovies(queryValue);
        setSerchedMovies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilms();
  }, [queryValue]);

  return (
    <div>
      {error && <div>Try to reload the page</div>}
      {isloading && <Loader />}
      <SearchForm onformSubmit={onformSubmit} />
      {/* {serchedMovies !== null && <MoviesList movies={serchedMovies} />} */}
    </div>
  );
};
export default Movies;
