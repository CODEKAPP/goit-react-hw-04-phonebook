import React from 'react';
import { FormStyleContainer } from './Styles/FormStyles';
import { InputStyle } from './Styles/InputStyle';
import { ButtonAdd } from './Styles/ButtonStyles';
import { LabelStyle } from './Styles/LabelStyle';
import { StyledH1 } from './Styles/TitleStyles';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const isNameValid = name.trim().length >= 3;
    const isNumberValid =
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        number
      );

    if (isNameValid && isNumberValid) {
      const newContact = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        number: number,
      };

      this.props.addContact(newContact);
      this.setState({
        name: '',
        number: '',
      });
    } else {
      alert('Please enter a valid name and number.');
    }
  };

  render() {
    const { name, number } = this.state;
    const isNameValid = name.trim().length >= 3;
    const isNumberValid =
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        number
      );

    return (
      <>
        <StyledH1>Phonebook</StyledH1>
        <FormStyleContainer onSubmit={this.handleSubmit}>
          <LabelStyle htmlFor="name">Name</LabelStyle>
          <InputStyle
            type="text"
            name="name"
            placeholder="Monkey D'Luffy"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="El nombre puede contener solo letras, apóstrofe, guión y espacios. Por ejemplo Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
          />

          <LabelStyle htmlFor="number">Number</LabelStyle>
          <InputStyle
            type="tel"
            name="number"
            placeholder="+57 123 456 4565"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Número no válido. El número de teléfono debe ser dígitos y puede contener espacios, guiones, paréntesis y puede comenzar con +."
            required
            value={number}
            onChange={this.handleInputChange}
            disabled={!isNameValid}
          />

          <ButtonAdd type="submit" disabled={!isNumberValid || !isNameValid}>
            Add Contact
          </ButtonAdd>
        </FormStyleContainer>
      </>
    );
  }
}

export default ContactForm;
