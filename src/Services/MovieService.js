const axios = require('axios').default;
import {
  TMDB_API_KEY,
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
} from '../Common/Urls';

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowPlayingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getPoster = path => `${TMDB_IMAGE_BASE_URL}/original/${path}`;

const GetMovieById = movieId =>
  TMDB_HTTP_REQUEST.get(`${ENDPOINTS.MOVIE}/${movieId}`);

const getUpcomingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

const getSearchMovies = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.SEARCH_MOVIES);

export {
  getNowPlayingMovies,
  getPoster,
  getUpcomingMovies,
  GetMovieById,
  getSearchMovies,
};
