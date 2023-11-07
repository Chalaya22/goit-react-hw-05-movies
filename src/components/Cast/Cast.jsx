import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
const { useEffect } = require('react');

const Cast = () => {
  const { movieId } = useParams();
  useEffect(() => {}, []);
  return <div> cast : {movieId} </div>;
};
export default Cast;
