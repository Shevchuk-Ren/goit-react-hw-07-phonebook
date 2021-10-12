import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('phonebook/addContact', data => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
});

export const deleteContact = createAction('phonebook/deleteContact');

export const filterContacts = createAction('phonebook/cgangeFilter');

// import phoneBookTypes from './phonebook-types';
// import { v4 as uuidv4 } from 'uuid';
// import store from '../store';

// export const addContact = data => ({
//   type: phoneBookTypes.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: phoneBookTypes.DELETE,
//   payload: contactId,
// });

// export const filterContacts = value => ({
//   type: phoneBookTypes.FILTER,
//   payload: value,
// });
