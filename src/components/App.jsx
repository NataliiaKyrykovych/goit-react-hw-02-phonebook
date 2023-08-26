import { Component } from 'react';
import { GlobalStyles } from './GlobalStyle';
import { Container, MainTitle, Title } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) ===
    undefined
      ? this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContact] };
        })
      : alert(`${newContact.name} is already in contacts`);
  };

  deleteContact = delContactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== delContactId
        ),
      };
    });
  };

  changeFilterByName = name => {
    this.setState({ filter: name });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact} />

        <Title>Contacts</Title>
        <Filter filterByName={filter} onChangeName={this.changeFilterByName} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />

        <GlobalStyles />
      </Container>
    );
  }
}