import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
const { useEffect } = require('react');

const Reviews = () => {
  const { movieId } = useParams();
  useEffect(() => {}, []);
  return <div>Reviews: {movieId}</div>;
};
export default Reviews;
