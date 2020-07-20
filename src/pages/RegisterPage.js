import React from 'react';
import Authform from '../components/authForm/AuthForm';
import { register } from '../redux/auth/authOperations';

const RegisterPage = () => {
  return (
    <>
      <h2>Register</h2>
      <Authform buttonName={'Sign up'} authRequest={register} />
    </>
  );
};

export default RegisterPage;
