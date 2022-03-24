import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowMore from 'react-simple-show-more';
import { getMovieReview } from '../../services/themoviedbAPI';

import styles from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await getMovieReview(movieId);
        setReviews(results);
      } catch (err) {}
    };

    fetchMovieReviews();
  }, [movieId]);

  const reviewsList = reviews.map(review => (
    <li className={styles.item} key={review.id}>
      <p className={styles.text}>
        <span className={styles.textAccent}>Author: </span>
        {review.author}
      </p>
      <p className={styles.text}>
        <span className={styles.textAccent}>Comment: </span>
        {review.content}
      </p>
      <p>
        <ShowMore
          text={review.content}
          length={700}
          showMoreLabel=" Show more >>"
          showLessLabel=" Show less <<"
          style={{
            cursor: 'pointer',
            color: 'rgba(238, 138, 16, 0.952)',
            fontWeight: 'bold',
          }}
        />
      </p>
    </li>
  ));

  return (
    <>
      {Boolean(reviews.length) ? (
        <ul className={styles.section}>{reviewsList}</ul>
      ) : (
        <p className={styles.noReviews}>
          We don't have any reviews for this movie.
        </p>
      )}
    </>
  );
};

export default Reviews;
