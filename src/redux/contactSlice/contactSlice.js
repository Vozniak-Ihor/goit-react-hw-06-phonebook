import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    contactfilter: (state, { payload }) => {
      console.log(payload);
      state.filter = payload;
    },
    deletefilter: (state) => {
      state.filter = '';
    },
  },
});

export const { addContacts, deleteContacts, contactfilter, deletefilter } =
  contactSlice.actions;

export default contactSlice.reducer;


