import { useState, useEffect } from 'react';
import LoginForm from './LogForm/LoginForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactSlice/contactSelectors';

export function App(params) {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const storeContacts = useSelector(getContacts);
  const storeFilter = useSelector(getFilter);

  console.log(storeContacts);
  console.log(storeFilter);

  useEffect(() => {
    const contactsFromLocalStorage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (contactsFromLocalStorage && contactsFromLocalStorage.length > 0) {
      setContacts(contactsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  console.log(contacts);

  const handleInputChange = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <LoginForm contacts={contacts} />
      <Filter onInputChange={handleInputChange} />
      <ContactsList />
    </>
  );
}
