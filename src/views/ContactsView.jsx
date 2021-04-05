import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import s from './Views.module.scss';
import Container from '../components/Container';

class ContactsView extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <Container>
        <div className={s.container}>
          <div className={s.wrapper}>
            <h2 className={s.subtitle}>
              Contacts{' '}
              {this.isLoading && <span className={s.loading}>Loading...</span>}
            </h2>
            <Filter />
            <ContactList />
          </div>
          <div className={s.wrapper}>
            <h1 className={s.title}>Phonebook</h1>
            <Form
              onInputChange={this.handleInputFilter}
              onSubmit={this.handleSubmit}
            />
          </div>
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
