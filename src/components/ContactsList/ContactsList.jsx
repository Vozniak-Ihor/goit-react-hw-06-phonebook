import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contactSlice/contactSlice';
import { getContacts, getFilter } from 'redux/contactSlice/contactSelectors';

const ContactsList = () => {
  const storeContacts = useSelector(getContacts);
   const storeFilter = useSelector(getFilter);
  const dispatch = useDispatch();



  const filteredContact = () => {
    return storeContacts.filter(({ name }) =>
      name.toUpperCase().includes(storeFilter.toUpperCase())
    );
  };


  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
    localStorage.setItem('contacts', JSON.stringify([...storeContacts]));
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
            onClick={()=>onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  });
};

export default ContactsList;

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
