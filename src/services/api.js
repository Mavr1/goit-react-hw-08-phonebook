import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const getAllContacts = () => axios.get('/contacts');

const addContact = (contact) => axios.post('/contacts', contact);

const deleteContact = (id) => axios.delete(`/contacts/${id}`);

const register = (credentials) => axios.post('/users/signup', credentials);

const login = (credentials) => axios.post('/users/login', credentials);

const getCurrentUser = () => axios.get('/users/current');

const logout = () => axios.post('/users/logout');

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export default {
  addContact,
  deleteContact,
  getAllContacts,
  token,
  register,
  login,
  logout,
  getCurrentUser,
};
