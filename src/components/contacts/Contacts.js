import React from 'react';
import ContactItem from '../contactItem/ContactItem';

const Contacts = ({ contacts }) => {
  return (
    <ul className="contactsList">
      {contacts.map((item) => {
        return <ContactItem key={item.id} id={item.id} />;
      })}
    </ul>
  );
};

export default Contacts;
