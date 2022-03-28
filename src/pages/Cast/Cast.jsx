import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from '../../services/themoviedbAPI';
import defAvatar from './defAvatar.png';

import styles from './cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { cast } = await getMoviesCredits(movieId);
        setActors(cast);
      } catch (err) {}
    };

    fetchMovieCast();
  }, [movieId]);

  const castList = actors.map(actor => (
    <li className={styles.castItem} key={actor.id}>
      <img
        className={styles.castImg}
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : defAvatar
        }
        alt={actor.original_name}
      />
      <h4 className={styles.name}>{actor.original_name}</h4>
      <p className={styles.character}>{actor.character}</p>
    </li>
  ));

  return (
    <>
      <ul className={styles.cast}>{castList}</ul>
    </>
  );
};

export default Cast;
