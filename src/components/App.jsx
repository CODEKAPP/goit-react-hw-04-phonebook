// App.jsx
import React from 'react';
import { DivContainer } from './Contacts/Styles/DivStyles';
import Contacts from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <section>
      <DivContainer>
        <Contacts />
      </DivContainer>
      <Toaster /> {/* Agrega el componente Toaster */}
    </section>
  );
};
