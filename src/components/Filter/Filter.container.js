import { connect } from 'react-redux';
import { filterContacts } from '../../redux/phoneBook/phonebook-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: state.phoneBook.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: evt => dispatch(filterContacts(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
