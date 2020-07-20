import React from 'react';
import Authform from '../components/authForm/AuthForm';
import { login } from '../redux/auth/authOperations';

const LoginPage = () => {
  return (
    <>
      <h2>Log in</h2>
      <Authform buttonName={'Log in'} authRequest={login} />
    </>
  );
};

export default LoginPage;
