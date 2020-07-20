import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../components/section/Section';
import AddContactform from '../components/addContactForm/AddContactForm';
import Filter from '../components/filter/Filter';
import Contacts from '../components/contacts/Contacts';
import contactsSelectors from '../redux/contacts/contactsSelectors';
// import { getAllContacts } from '../redux/contacts/contactsOperations';
import { filterContacts } from '../services/helpers';

const PhonebookPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(getAllContacts()), [dispatch]);

  const contacts = useSelector((state) =>
    contactsSelectors.getContactsList(state)
  );

  const filter = useSelector((state) =>
    contactsSelectors.getContactsFilter(state)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <AddContactform />
      </Section>
      <Section name="Contacts">
        {contacts.length > 1 && <Filter />}
        <Contacts
          contacts={filter !== '' ? filterContacts(contacts, filter) : contacts}
        />
      </Section>
    </>
  );
};

export default PhonebookPage;
