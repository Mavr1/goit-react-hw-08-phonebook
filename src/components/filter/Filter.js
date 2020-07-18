import React from 'react';
import Input from '../input/Input';
import { useDispatch } from 'react-redux';
import contactsSlice from '../../redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = (e) =>
    dispatch(contactsSlice.actions.filterContacts(e.target.value));
  return (
    <Input
      label="Find contacts by name"
      onChange={filterContacts}
      name="filter"
    />
  );
};

export default Filter;
