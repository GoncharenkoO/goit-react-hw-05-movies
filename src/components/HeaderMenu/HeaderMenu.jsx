import { NavLink } from 'react-router-dom';
import { navLinks } from '../../util/nav-links';
import styles from '../HeaderMenu/headerMenu.module.css';

const getLinkClassName = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const HeaderMenu = () => {
  const lis = navLinks.map(link => (
    <li key={link.href}>
      <NavLink className={getLinkClassName} to={link.href}>
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <header className={styles.nav}>
      <ul className={styles.headerMenu}>{lis}</ul>
    </header>
  );
};

export default HeaderMenu;
