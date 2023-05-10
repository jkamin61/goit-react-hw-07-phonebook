import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    setContacts: (state, action) => {
      state.items = action.payload.items;
      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
  }

});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
