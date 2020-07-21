import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Switches from '../switch/Switch';
import UserMenu from '../userMenu/UserMenu';
import authSelectors from '../../redux/auth/authSelectors';
import styles from './Header.module.css';
import themeSelectors from '../../redux/theme/themeSelectors';

const Header = () => {
  const isAuthenticated = useSelector((state) => authSelectors.getAuth(state));
  const theme = useSelector((state) => themeSelectors.getCurrentTheme(state));
  const linkStyle = theme === 'dark' && styles.linkDark;
  return (
    <header>
      <div className={styles.headerContainer}>
        <nav>
          <ul className={styles.navMenu}>
            <li className={styles.navMenuItem}>
              <Link className={linkStyle} to="/">
                Home
              </Link>
            </li>
            {isAuthenticated && (
              <li className={styles.navMenuItem}>
                <Link className={linkStyle} to="/contacts">
                  Phonebook
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <Switches />
        {!isAuthenticated && (
          <ul className={styles.authMenu}>
            <li className={styles.authMenuItem}>
              <Link className={linkStyle} to="/login">
                Log in
              </Link>
            </li>
            <li className={styles.authMenuItem}>
              <Link className={linkStyle} to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        {isAuthenticated && <UserMenu />}
      </div>
    </header>
  );
};

export default Header;
