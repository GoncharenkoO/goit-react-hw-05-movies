import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import styles from './searchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChangeQuery = event => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      toast.info('Please enter your query!');
      return;
    }

    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.button}></button>
        <input
          type="text"
          value={search}
          autoComplete="off"
          autoFocus
          onChange={handleChangeQuery}
          className={styles.input}
          placeholder="Enter movie name..."
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
