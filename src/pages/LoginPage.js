import React from 'react';
import Authform from '../components/authForm/AuthForm';

const LoginPage = () => {
  return (
    <>
      <h2>Log in</h2>
      <Authform buttonName={'Log in'} />
    </>
  );
};

export default LoginPage;
