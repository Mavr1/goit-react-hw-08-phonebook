import React from 'react';
import Button from '../button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const ContactItem = ({ id }) => {
  const dispatch = useDispatch();
  const delContact = () => dispatch(deleteContact(id));
  const name = useSelector(
    (state) => contactsSelectors.getContactData(state, id).name
  );
  const number = useSelector(
    (state) => contactsSelectors.getContactData(state, id).number
  );

  return (
    <li>
      <span className="contactName">{name}</span>
      <span className="contactNumber">{number}</span>
      <Button name="Delete" clsn="btnDelete" onClick={delContact} />
    </li>
  );
};

export default ContactItem;
