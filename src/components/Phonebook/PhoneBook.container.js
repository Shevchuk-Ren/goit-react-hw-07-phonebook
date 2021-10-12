import { connect } from 'react-redux';
import Phonebook from './Phonebook';
import { addContact } from '../../redux/phoneBook/phonebook-actions';

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
