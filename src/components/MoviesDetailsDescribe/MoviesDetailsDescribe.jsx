import React from 'react';
import { StyleDetailsdescribe } from './MoviesDetailsDescribe.styled';
import { Link } from 'react-router-dom';
const MoviesDetailsDescribe = ({ movies }) => {
  return (
    <StyleDetailsdescribe>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
          alt={`${movies.original_title} poster`}
          width="250"
        />

        <div>
          <ul>
            See more...
            <li>
              <Link to="cast">cast</Link>
            </li>
            <li>
              <Link to="reviews">reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>{movies.title}</h2>
        <p>({movies.original_title})</p>

        <h2>Огляд</h2>
        <p>{movies.overview}</p>
        <h2>Жанри</h2>
        <ul>
          {movies.genres &&
            movies.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </StyleDetailsdescribe>
  );
};
export default MoviesDetailsDescribe;
