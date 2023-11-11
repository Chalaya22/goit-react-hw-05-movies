import { getTrending } from '../services/api';
import Loader from 'components/Loader/Loader';
import Title from 'components/Title/Title';
import MoviesList from 'components/MoviesList/MoviesList';

const { useEffect, useState } = require('react');

const Home = () => {
  const [isloading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fatchTranding = async () => {
      setIsLoading(true);
      try {
        const response = await getTrending();
        setMovies(prevState => [...prevState, ...response.results]);
      } catch (error) {
        setError(error.massage);
      } finally {
        setIsLoading(false);
      }
    };
    fatchTranding();
  }, []);
  return (
    <div>
      {error !== null && <p> Ooops...Error massage: {error}</p>}
      {isloading && <Loader />}
      <Title name="Trending today" />
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
