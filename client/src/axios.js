import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const getMovieByQuery = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  return response.data;
};
