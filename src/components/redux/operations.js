import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://645bcaab99b618d5f325f726.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { thunkAPI }) => {
    // const contacts = useSelector((state) => state.contacts.items);
    // const isExistContact = contacts.find(
    //   (item) => item.name.toLowerCase() === contact.name.toLowerCase()
    // );
    // if (isExistContact) {
    //   thunkAPI.rejectWithValue({ error: 'Contact already exists!' });
    //   return;
    // }
    try {

      const response = await axios.post('/contacts', contact);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  });

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { thunkAPI }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  });
