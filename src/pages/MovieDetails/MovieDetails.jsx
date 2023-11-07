import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BtnBack from 'components/BtnBack/BtnBack';
const { useEffect } = require('react');

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {}, []);

  return (
    <div>
      <BtnBack to={backLinkHref}> Go back </BtnBack>

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
