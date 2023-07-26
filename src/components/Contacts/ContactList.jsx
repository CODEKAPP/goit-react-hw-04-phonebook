// ContactList.jsx
import React from 'react';
import { DeleteButton } from './Styles/ButtonStyles';
import { ListStyle, ItemList } from './Styles/ListStyle';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ListStyle>
      {contacts.map(contact => (
        <ItemList key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => deleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ItemList>
      ))}
    </ListStyle>
  );
};

export default ContactList;
