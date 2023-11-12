import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyledReviews } from './Reviews.styled';
import { getReviewsMovie } from '../../services/api';
// import NotFound from 'components/NotFound/NotFound';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const response = await getReviewsMovie(movieId);
        setReviews(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isloading && <Loader />}

      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <StyledReviews key={id}>
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </StyledReviews>
          );
        })
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
    </>
  );
};
export default Reviews;
