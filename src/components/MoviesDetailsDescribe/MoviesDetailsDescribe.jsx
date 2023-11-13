import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  StyleDetailsdescribe,
  LinkListCastReviews,
  StyledLinkCastReviews,
} from './MoviesDetailsDescribe.styled';
const MoviesDetailsDescribe = ({ movies }) => {
  return (
    <StyleDetailsdescribe>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={`${movies.original_title} poster`}
          width="250"
        />
        <h3> See more...</h3>
        <LinkListCastReviews>
          <li>
            <StyledLinkCastReviews to="cast">cast</StyledLinkCastReviews>
          </li>
          <li>
            <StyledLinkCastReviews to="reviews">reviews</StyledLinkCastReviews>
          </li>
        </LinkListCastReviews>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <div>
        <h2>{movies.title}</h2>
        <p>({movies.original_title})</p>

        <h2>Overviev</h2>
        <p>{movies.overview}</p>
        <h2>Genres</h2>
        <ul>
          {movies.genres &&
            movies.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </StyleDetailsdescribe>
  );
};
export default MoviesDetailsDescribe;
