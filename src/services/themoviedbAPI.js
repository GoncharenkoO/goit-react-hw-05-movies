import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '330d8d8c24db83f5c7c344addef5e20a',
  },
});

export const getFavoriteMovies = async page => {
  const { data } = await instance.get(`/trending/movie/day`, {
    params: {
      page,
    },
  });
  return data;
};

export const searchMoviesKey = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
      page: 1,
    },
  });
  return data;
};

export const getDetailsMovies = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getMoviesCredits = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const getMovieReview = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};
