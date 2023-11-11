import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6e2a4b2de27857a6314a97684d8e3ec6';

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  return await response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data;
};
