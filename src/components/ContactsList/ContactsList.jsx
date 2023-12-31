import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice/contactSlice';
import { getContacts } from 'redux/contactSlice/contactSelectors';
import { getFilter } from 'redux/filterSlice/filterSelectors';

const ContactsList = () => {
  const storeContacts = useSelector(getContacts);
  const storeFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContact = () => {
    return storeContacts.contacts.filter(({ name }) => {
      return name.includes(storeFilter);
    });
  };

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };
  return filteredContact().map(({ id, name, number }) => {
    return (
      <ul className={css.contactList} key={id}>
        <li className={css.contactItem}>
          <p className={css.contactDetails}>
            {name}: {number}
          </p>

          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      </ul>
    );
  });
};

export default ContactsList;
