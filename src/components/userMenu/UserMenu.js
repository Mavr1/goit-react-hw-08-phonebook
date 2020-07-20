import React from 'react';
import styles from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logOut());
  return (
    <div className={styles.userMenu}>
      <img
        src="https://randomuser.me/api/portraits/women/93.jpg"
        width={30}
        className={styles.avatar}
        alt="userpic"
      />
      <span>Hello, User</span>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
