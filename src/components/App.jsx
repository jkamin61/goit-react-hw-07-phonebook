import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filterSlice';
import { fetchContacts } from './redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    const duplicateName = contacts.find((contact) => contact.name === name);

    if (duplicateName) {
      alert(`${name} is already in your contacts`);
    } else {
      const newContact = { id: nanoid(), name, number };
      dispatch(addContact(newContact));
    }
  };

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filterContacts = (contacts, filter) =>
    contacts.filter((contact) =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

  const filteredContacts = filterContacts(contacts || [], filter);

  return (
    <div>
      <h1 className="heading">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className="heading">Contacts</h2>
      <div className="list">
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </div>
    </div>
  );
};
