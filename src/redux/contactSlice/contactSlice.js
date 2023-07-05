import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
  filter: '',
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts(state, { payload }) {
      state.filter = state.contacts.filter(({ id }) => {
        return id !== payload;
      });
    },
  },
});
// console.log(contactSlice);

export const { addContacts, deleteContacts } = contactSlice.actions;

export default contactSlice.reducer;
