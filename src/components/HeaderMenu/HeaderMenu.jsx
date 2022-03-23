import { NavLink } from 'react-router-dom';
import styles from '../HeaderMenu/headerMenu.module.css';

import './headerMenu.module.css';

const getLinkClassName = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const HeaderMenu = () => {
  return (
    <header className={styles.nav}>
      <ul className={styles.headerMenu}>
        <li>
          <NavLink className={getLinkClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClassName} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default HeaderMenu;
