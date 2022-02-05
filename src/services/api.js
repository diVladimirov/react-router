import axios from 'axios';

const APIkey = '?api_key=0acbef793912116e8168b05c9b24e1e7';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFilms = page =>
  axios.get(`
  ${BASE_URL}/trending/movie/day${APIkey}&page=${page}`);

export const fetchFilmsDetails = id =>
  axios.get(`
  ${BASE_URL}/movie/${id}${APIkey}`);
