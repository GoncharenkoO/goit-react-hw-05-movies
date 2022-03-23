import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import no_image from './no_image.jpg';

import styles from '../MovieList/movieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const element = movies.map(movie => (
    <li key={movie.id} className={styles.item}>
      <Link
        state={{ from: location }}
        className={styles.link}
        to={`/movie/${movie.id}`}
      >
        {movie.poster_path ? (
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img className={styles.image} src={no_image} alt={movie.title} />
        )}
      </Link>
      <p className={styles.movieTitle}>{movie.title}</p>
    </li>
  ));
  return (
    <div className={styles.list}>
      <ul className={styles.gallery}>{element}</ul>
    </div>
  );
};

export default memo(MoviesList);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};
