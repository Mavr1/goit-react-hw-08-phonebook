import React from 'react';
import styles from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logOut());
  const userName = useSelector((state) => authSelectors.getUserName(state));
  return (
    <div className={styles.userMenu}>
      <img
        src="https://images.discordapp.net/avatars/525382819808280597/f3e9d922bafff516be910eba12a560e5.png?size=512"
        width={30}
        className={styles.avatar}
        alt="userpic"
      />
      <span>Hello, {userName}</span>
      <button className="btnLogout" type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
