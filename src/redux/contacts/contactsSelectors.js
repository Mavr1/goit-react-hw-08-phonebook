const getContactsList = (state) => state.contacts.list;

const getContactsFilter = (state) => state.contacts.filter;

const getContactData = (state, id) => {
  const contactList = getContactsList(state);
  return contactList.find((item) => item.id === id);
};

export default { getContactsList, getContactsFilter, getContactData };
