import { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import Form from '../components/PhonebookForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { wrapper, title, subtitle, loading } from '../App.module.scss';
import Container from '../components/Container';
// import axios from 'axios';
// console.log(contactsOperations.GET());

class ContactsView extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <Container>
        <div className={wrapper}>
          <h1 className={title}>Phonebook</h1>
          <Form
            onInputChange={this.handleInputFilter}
            onSubmit={this.handleSubmit}
          />
          <h2 className={subtitle}>
            Contacts{' '}
            {this.isLoading && <span className={loading}>Loading...</span>}
          </h2>
          <Filter />
          <ContactList />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  getContacts: contactsOperations.GET,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);

// function ContactsView({ handleSubmit, handleInputFilter, isLoading }) {
//   useEffect(() => {
//     console.log('from ContactsView useEffect');
//     contactsOperations.GET();
//     // axios.get('/contacts').then((res) => console.log(res));
//   });

//   return (
//     <div className={wrapper}>
//       <h1 className={title}>Phonebook</h1>
//       <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
//       <h2 className={subtitle}>
//         Contacts {isLoading && <span className={loading}>Loading...</span>}
//       </h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// }
