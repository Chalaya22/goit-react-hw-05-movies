import { useParams } from 'react-router-dom';
const { useEffect } = require('react');

const MovieDetails = () => {
  const { movieId } = useParams();

  useEffect(() => {}, []);
  return <div>MovieDetails : {movieId}</div>;
};
export default MovieDetails;
