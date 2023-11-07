import { useParams } from 'react-router-dom';
const { useEffect } = require('react');

const MovieDetails = () => {
  useEffect(() => {}, []);

  const { movieId } = useParams();
  return <div>MovieDetails : {movieId}</div>;
};
export default MovieDetails;
