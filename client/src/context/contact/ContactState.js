import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Bob Bob',
        email: 'bob@gmail.com',
        phone: '000-000-0000',
        type: 'Personal',
      },
      {
        id: 2,
        name: 'Jack Jack',
        email: 'jack@gmail.com',
        phone: '000-000-0000',
        type: 'Personal',
      },
      {
        id: 3,
        name: 'John Bob',
        email: 'john@gmail.com',
        phone: '000-000-0000',
        type: 'Professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
