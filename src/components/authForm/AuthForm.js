import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input/Input';
import Button from '../button/Button';

const Authform = ({ buttonName, authRequest, formType }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputName = (e) => setName(e.target.value);
  const handleInputEmail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(authRequest(credentials));
    setName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {formType === 'register' && (
        <Input
          value={name}
          label="Name"
          name="userName"
          onChange={handleInputName}
        />
      )}
      <Input
        value={email}
        label="Email"
        name="userEmail"
        onChange={handleInputEmail}
      />
      <Input
        value={password}
        label="Password"
        name="password"
        onChange={handleInputPassword}
      />
      <Button name={buttonName} type="submit" />
    </form>
  );
};

export default Authform;
