import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../input/Input';
import Button from '../button/Button';
import { addContact } from '../../redux/contacts/contactsOperations';

const AddContactform = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputName = (e) => setName(e.target.value);
  const handleInputNumber = (e) => setNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };
    if (name.trim()) {
      dispatch(addContact(newContact));
    }
    setName('');
    setNumber('');
  };

  return (
    <form>
      <Input value={name} label="Name" name="name" onChange={handleInputName} />
      <Input
        value={number}
        label="Number"
        name="number"
        onChange={handleInputNumber}
      />
      <Button name="Add contact" type="submit" onClick={handleSubmit} />
    </form>
  );
};

export default AddContactform;
