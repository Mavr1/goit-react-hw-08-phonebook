import api from '../../services/api';
import contactsSlice from './contactsSlice';
import themeSlice from '../theme/themeSlice';

export const addContact = (contact) => async (dispatch, getState) => {
  try {
    const match = getState().contacts.list.some(
      (item) => item.name === contact.name
    );
    if (!match) {
      const addedContact = await api.addContact(contact);
      dispatch(contactsSlice.actions.addContactSuccess(addedContact.data));
    } else alert(`User with name ${contact.name} already exists`);
  } catch (e) {
    dispatch(contactsSlice.actions.addContactFailure(e));
    console.log(e);
  }
};

export const deleteContact = (id) => async (dispatch, getState) => {
  try {
    await api.deleteContact(id);
    dispatch(contactsSlice.actions.deleteContactSuccess(id));
  } catch (e) {
    dispatch(contactsSlice.actions.deleteContactFailure(e));
    console.log(e);
  }
};

export const getAllContacts = () => async (dispatch, getState) => {
  try {
    dispatch(themeSlice.actions.setLoadingTrue());
    const { data } = await api.getAllContacts();
    dispatch(contactsSlice.actions.getAllContactsSuccess(data));
  } catch (e) {
    dispatch(contactsSlice.actions.getAllContactsFailure(e));
    console.log(e);
  } finally {
    dispatch(themeSlice.actions.setLoadingFalse);
  }
};
