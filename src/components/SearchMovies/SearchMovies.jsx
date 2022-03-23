import { useEffect, useState } from 'react';
import { getDetailsMovies } from '../../services/themoviedbAPI';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import no_image from './no_image.jpg';
import styles from './searchMovies.module.css';

const SearchMovies = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from?.location ?? '/');
  };

  const genres = movie?.genres.map(genre => genre.name).join(', ');

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getDetailsMovies(movieId);
        setMovie(data);
      } catch (err) {}
    };

    fetchInfo();
  }, [movieId]);

  return (
    <>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onGoBack} type="button">
          &#8656;&ensp; Go back
        </button>
      </div>
      {movie && (
        <div className={styles.movies}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : no_image
            }
            alt={movie.title}
          />
          <div className={styles.movieInfo}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.text}>Vote: {movie.vote_average}</p>
            <p className={styles.text}>Popularity: {movie.popularity}</p>
            <p className={styles.text}>Genres: {genres}</p>
            <h2 className={styles.title}>Overview</h2>
            <p className={styles.text}>{movie.overview}</p>
          </div>
        </div>
      )}

      <h3 className={styles.information}>Additional information</h3>

      <ul className={styles.menu}>
        <li>
          <Link className={styles.link} to={`/movies/${movieId}/cast`}>
            Cast
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/movies/${movieId}/reviews`}>
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SearchMovies;
