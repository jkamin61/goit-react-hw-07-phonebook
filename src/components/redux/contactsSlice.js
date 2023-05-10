import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
    setContacts: (state, action) => action.payload,
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
