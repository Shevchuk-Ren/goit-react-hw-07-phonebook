import {Component} from 'react';
import Section from '../Section';
import Phonebook from '../Phonebook';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';
import { connect } from 'react-redux';
import { fetchContact } from '../../redux/phoneBook/phonebook-operations';
import { getLoading } from '../../redux/phoneBook/phonebook-selectors';



class App extends Component {

  componentDidMount() {
  this.props.fetchContact()
  }
   

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook />
        </Section>

        <Section title="Contacts">
           
          <Filter />
           {this.props.isLoadingContacts && <h3 className='loading'>Loading...</h3>}
          <ContactList />
        
        </Section>
      </Container>
    );
  }
}

const mapStateToProps = state => ({

    isLoadingContacts: getLoading(state),
  });

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);