import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getFavoriteMovies } from '../../services/themoviedbAPI';
import no_image from './no_image.jpg';
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

  const trendingMovies = data.movies.map(film => (
    <li className={styles.moviesItem} key={film.id}>
      <Link
        className={styles.link}
        to={`/movies/${film.id}`}
        state={{ from: location }}
      >
        <img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
              : no_image
          }
          alt={film.title}
          className={styles.poster}
        />
      </Link>
      <span className={styles.movieTitle}>{film.title}</span>
    </li>
  ));

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.moviesList}>{trendingMovies}</ul>
      {data.loading && <Loader />}
    </div>
  );
};

export default FavoritesMovie;
