import React from 'react';
import Section from '../Section';
import Phonebook from '../Phonebook';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';

export default function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
