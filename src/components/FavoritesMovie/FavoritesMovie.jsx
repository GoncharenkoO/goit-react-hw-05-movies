import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFavoriteMovies } from '../../services/themoviedbAPI';
import PropTypes from 'prop-types';
import CartMovies from '../CartMovies';
import Loader from '../Loader';

import styles from './favoritesMovie.module.css';

const FavoritesMovie = () => {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { results } = await getFavoriteMovies();
        setData(prevState => {
          return {
            movies: [...prevState.movies, ...results],
            loading: false,
            error: null,
          };
        });
      } catch (error) {
        setData(prevState => {
          return {
            ...prevState,
            loading: false,
            error: error.message,
          };
        });
      }
    };
    fetchPosts();
  }, []);

  const { movies, loading } = data;

  const trendingMovies = movies.map(movie => (
    <CartMovies movie={movie} location={location} key={movie.id} />
  ));

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.moviesList}>{trendingMovies}</ul>
      {loading && <Loader />}
    </div>
  );
};

export default FavoritesMovie;

FavoritesMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      movie: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};
