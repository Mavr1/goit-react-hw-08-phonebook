import React from 'react';
import Switches from '../switch/Switch';
import UserMenu from '../userMenu/UserMenu';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <Switches />
        <nav>
          <ul className="navMenu">
            <li className={styles.navMenuItem}>Contacts</li>
          </ul>
        </nav>
        <ul className={styles.authMenu}>
          <li className={styles.authMenuItem}>Login</li>
          <li className={styles.authMenuItem}>Register</li>
        </ul>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
