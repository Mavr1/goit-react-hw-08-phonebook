import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in dolor
        sit amet neque ullamcorper elementum pharetra ornare magna. Donec eu
        velit pellentesque, dignissim est vitae, sollicitudin neque.
      </p>
      <img
        className={styles.homePageCover}
        src="https://invent.kde.org/uploads/-/system/project/avatar/120/phonebook.svg.png?width=64"
        alt="phonebook pic"
        width={300}
      />
    </>
  );
};

export default HomePage;
