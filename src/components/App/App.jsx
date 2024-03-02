import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target[0].value;
    const number = e.target[1].value;

    if (contacts.some(contact => contact.name === name)) {
      alert(name + ' is already in contacts.');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    document.getElementsByTagName('form')[0].reset();
  };

  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const deleteContact = e => {
    const idToDelete = e.target.id;
    const updatedContacts = contacts.filter(
      contact => contact.id !== idToDelete
    );
    setContacts(updatedContacts);
  };

  let list = contacts;
  if (filter !== '') {
    list = list.filter(contact => contact.name.toLowerCase().includes(filter));
  }
  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm submitFunction={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filterFunction={handleFilterChange} />
      <ContactList listToSearch={list} deleteFunction={deleteContact} />
    </div>
  );
};

export default App;
