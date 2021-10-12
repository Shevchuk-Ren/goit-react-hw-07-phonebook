import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item, List } from './ContactList.styled';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phoneBook/phonebook-actions';

const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <Item key={id}>
        <span>{name} : </span>
        <span>{number}</span>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

const mapStateToProps = state => {
  const { contacts, filter } = state.phoneBook;
  const normalizedFilter = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
  );
  return {
    contacts: normalizedFilter,
  };
};
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
