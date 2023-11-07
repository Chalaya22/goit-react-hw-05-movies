import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { useEffect } = require('react');

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>MovieDetails : {movieId}</h1>
      <ul>
        See more...
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
