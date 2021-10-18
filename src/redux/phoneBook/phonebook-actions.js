import { createAction } from '@reduxjs/toolkit';




export const addPhonebookRequest = createAction('phonebook/addContact');
export const addPhonebookSuccess = createAction('phonebook/addContactSuccess');
export const addPhonebookError = createAction('phonebook/addContactError')

export const deletePhonebookRequest = createAction('contacts/deleteContact');
export const deletePhonebookSuccess = createAction('contacts/deleteContactSuccess');
export const deletePhonebookError = createAction('contacts/deleteContactError')

// export const addContact = contact => dispatch => {
//   console.log(contact, `New data`)
//   const contactNew = {
//      id: uuidv4(),
//      name: contact.name,
//       number: contact.number,
//   };
//   console.log(contactNew, `New ContCT`)
//   dispatch({ type: 'contacts/addContact' });

//   axios.post(
//     `/contacts`, contactNew
//   ).then(({ contacts }) => dispatch({
//     // if (res.ok) {
//     //   return res.json();
//     // }
    
//     type: 'contacts/addContactSuccess',
//     payload: contacts,
//   })).catch(error => dispatch({
//     // if (res.ok) {
//     //   return res.json();
//     // }
//     type: 'contacts/addContactError',
//     payload: error
//   }))
//  }
// export const addContact = createAction('phonebook/addContact', data => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name: data.name,
//       number: data.number,
//     },
//   };
// });

// export const deleteContact = createAction('phonebook/deleteContact');

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
