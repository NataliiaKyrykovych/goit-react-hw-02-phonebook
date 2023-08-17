import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <div>
        

        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>

        
      </div>
  );
};
