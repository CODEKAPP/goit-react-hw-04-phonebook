import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { DivContainerSection, DivContainerPhonebook } from './Styles/DivStyles';
import { StyledH2 } from './Styles/TitleStyles';
import { toast } from 'react-hot-toast';

class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentWillUnmount() {
    // No necesitamos hacer nada aquí, pero es bueno tener en cuenta este ciclo de vida.
  }

  addContact = newContact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      toast.error(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      toast.success(`${newContact.name} has been added to contacts.`);
    }
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <DivContainerSection className="test">
        <DivContainerPhonebook>
          <ContactForm addContact={this.addContact} />

          {contacts.length > 0 && (
            <>
              <StyledH2>Contacts</StyledH2>
              <Filter
                filter={filter}
                setFilter={filter => this.setState({ filter })}
              />
              <ContactList
                contacts={filteredContacts}
                deleteContact={this.deleteContact}
              />
            </>
          )}
        </DivContainerPhonebook>
      </DivContainerSection>
    );
  }
}

export default Contacts;
