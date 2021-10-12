import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialStateFilter = '';
const initialStateContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const filterReducer = createReducer(initialStateFilter, {
  'phonebook/cgangeFilter': (_, action) => action.payload,
});

const contacts = createReducer(initialStateContacts, {
  'phonebook/addContact': (state, { payload }) => {
    const normalizedName = state.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );

    if (normalizedName) {
      alert(`${payload.name} is alredy in contacts.`);
      return state;
    }
    return [...state, payload];
  },
  'phonebook/deleteContact': (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  contacts,
  filter: filterReducer,
});

// import { combineReducers } from 'redux';
// import phoneBookTypes from './phonebook-types';

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case phoneBookTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contacts = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   { type, payload },
// ) => {
//   switch (type) {
//     case phoneBookTypes.ADD_CONTACT:
//       const normalizedName = state.find(
//         contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
//       );

//       if (normalizedName) {
//         alert(`${payload.name} is alredy in contacts.`);
//         return state;
//       }
//       return [...state, payload];

//     case phoneBookTypes.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts,
//   filter: filterReducer,
// });
