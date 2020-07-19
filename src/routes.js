import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PhonebookPage from './pages/PhonebookPage';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: HomePage,
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: RegisterPage,
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: LoginPage,
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: PhonebookPage,
    private: true,
    restricted: false,
  },
];
