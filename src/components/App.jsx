import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newName => {
    if (
      this.state.contacts.map(contact => contact.name).includes(newName.name)
    ) {
      alert(`${newName.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newName],
        };
      });
    }
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <GlobalStyle />

        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.handleDelete}
          />
        </Section>
      </div>
    );
  }
}