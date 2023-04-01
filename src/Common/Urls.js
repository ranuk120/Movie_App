const config = require('../../package.json');

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// const TMDB_API_KEY = '7e3c3623ec1e6816dd1ade07bee310e0';

const TMDB_API_KEY = config.projectConfig.apiKey;

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: '/movie/now_playing',
  UPCOMING_MOVIES: '/movie/upcoming',
  MOVIE: '/movie',
  SEARCH_MOVIES: '/search/movie',
};

const APPPEND_TO_RESPOND = {
  CREDITS: 'credits',
};

export {
  TMDB_API_KEY,
  TMDB_BASE_URL,
  ENDPOINTS,
  TMDB_IMAGE_BASE_URL,
  APPPEND_TO_RESPOND,
};
