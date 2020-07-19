import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input/Input';
import Button from '../button/Button';

const Authform = ({ buttonName }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleInputName = (e) => setName(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setPassword('');
  };

  return (
    <form>
      <Input
        value={name}
        label="Name"
        name="userName"
        onChange={handleInputName}
      />
      <Input
        value={password}
        label="Password"
        name="password"
        onChange={handleInputPassword}
      />
      <Button name={buttonName} type="submit" onClick={handleSubmit} />
    </form>
  );
};

export default Authform;
