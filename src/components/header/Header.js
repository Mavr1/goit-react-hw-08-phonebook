import React from 'react';
import Switches from '../switch/Switch';
import UserMenu from '../userMenu/UserMenu';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <nav>
          <ul className={styles.navMenu}>
            <li className={styles.navMenuItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navMenuItem}>
              <Link to="/contacts">Phonebook</Link>
            </li>
          </ul>
        </nav>
        <ul className={styles.authMenu}>
          <li className={styles.authMenuItem}>
            <Link to="/login">Log in</Link>
          </li>
          <li className={styles.authMenuItem}>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <Switches />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
