//Contacts.jsx;
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { DivContainerSection, DivContainerPhonebook } from './Styles/DivStyles';
import { StyledH2 } from './Styles/TitleStyles';
import { toast } from 'react-hot-toast';

const useLocalStorageContacts = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return [contacts, setContacts];
};

const Contacts = () => {
  const [contacts, setContacts] = useLocalStorageContacts();
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      toast.error(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
      toast.success(`${newContact.name} has been added to contacts.`);
    }
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <DivContainerSection className="test">
      <DivContainerPhonebook>
        <ContactForm addContact={addContact} />

        {contacts.length > 0 && (
          <>
            <StyledH2>Contacts</StyledH2>
            <Filter filter={filter} setFilter={setFilter} />
            <ContactList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            />
          </>
        )}
      </DivContainerPhonebook>
    </DivContainerSection>
  );
};

export default Contacts;
