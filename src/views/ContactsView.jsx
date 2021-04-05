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
        <section className={s.section}>
          <h1 className={s.title}>Phonebook</h1>
          <div className={s.contactsWrapper}>
            <b className={s.subtitle}>
              Contacts:{' '}
              {this.isLoading && <span className={s.loading}>Loading...</span>}
            </b>
            <Filter />
            <ContactList />
          </div>
          <div className={s.formWrapper}>
            <Form
              onInputChange={this.handleInputFilter}
              onSubmit={this.handleSubmit}
            />
          </div>
        </section>
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
