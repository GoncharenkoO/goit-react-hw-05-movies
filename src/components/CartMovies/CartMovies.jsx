import { Link } from 'react-router-dom';
import no_image from './no_image.jpg';
import PropTypes from 'prop-types';
import styles from './cartMovies.module.css';

const CartMovies = ({ movie, location }) => {
  return (
    <li key={movie.id} className={styles.item}>
      <Link
        state={{ from: location }}
        className={styles.link}
        to={`/movies/${movie.id}`}
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
  );
};

export default CartMovies;

CartMovies.propTypes = {
  movie: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.object.isRequired,
};
