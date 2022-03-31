import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartMovies from '../../CartMovies';

import styles from '../MovieList/movieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const element = movies.map(movie => (
    <CartMovies movie={movie} location={location} key={movie.id} />
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
    })
  ).isRequired,
};
