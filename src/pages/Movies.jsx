import { Link } from 'react-router-dom';

const { useEffect } = require('react');

const Movies = () => {
  useEffect(() => {}, []);
  return (
    <div>
      {['movieId-1', 'movieId-2', 'movieId-3'].map(movieId => {
        return (
          <Link key={movieId} to={`${movieId}`}>
            {movieId}
          </Link>
        );
      })}
    </div>
  );
};
export default Movies;
