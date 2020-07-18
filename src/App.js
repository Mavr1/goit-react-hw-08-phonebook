import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import PhonebookPage from './pages/PhonebookPage';
import themeSelectors from './redux/theme/themeSelectors';
import styles from './App.module.css';

const App = () => {
  const currentTheme = useSelector((state) =>
    themeSelectors.getCurrentTheme(state)
  );

  return (
    <div
      className={currentTheme === 'light' ? styles.AppLight : styles.AppDark}
    >
      <Header />
      <PhonebookPage />
    </div>
  );
};

export default App;
