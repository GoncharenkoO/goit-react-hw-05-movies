import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMoviesKey } from '../../services/themoviedbAPI';

import SearchBar from './SearchBar';
import MoviesList from '../../components/MovieSearch/MovieList';

import Loader from '../../components/Loader';

import styles from './movieSearch.module.css';

const MoviesPage = () => {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const page = searchParams.get('page');

  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const newData = await searchMoviesKey(page, query);
        setData(...newData);
      } catch (err) {}
    };
    if (query) {
      fetchPosts();
      return;
    }
  }, [query, page]);

  const changeSearch = query => setSearchParams({ query, page: 1 });

  const { error, movies, loading } = data;

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={changeSearch} />

      {query && Boolean(movies.length) && (
        <MoviesList movies={movies} location={location} />
      )}

      {!movies.length && query && !loading && !error && (
        <p>По запросу {query} ничего не найдено</p>
      )}

      {data.loading && <Loader />}
    </div>
  );
};

export default MoviesPage;
