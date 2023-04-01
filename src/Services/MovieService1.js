// import axios from 'axios';
// import {TMDB_BASE_URL, TMDB_API_KEY} from '../Common/Urls';

// export const fetchMovies = async (search, movies) => {
//   console.log('fetch movies', search);
//   if (!search) {
//     const response = await axios.get(
//       `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`,
//     );
//     return [...movies, ...response.data.results];
//   } else {
//     console.log('in else');
//     const response = await axios.get(
//       `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${search}`,
//     );
//     return [...response.data.results];
//   }
// };
