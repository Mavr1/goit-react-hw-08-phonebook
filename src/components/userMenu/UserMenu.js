import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={styles.userMenu}>
      <img
        src="https://randomuser.me/api/portraits/women/93.jpg"
        width={30}
        className={styles.avatar}
        alt="userpic"
      />
      <span>Hello, User</span>
      <button type="button">Log out</button>
    </div>
  );
};

export default UserMenu;
