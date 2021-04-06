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
    const { isLoading } = this.props;

    return (
      <Container>
        <section className={s.contactSection}>
          <h1 className={s.contactSection__title}>Phonebook</h1>
          <div className={s.contactWrapper}>
            <Filter />
            <b className={s.subtitle}>
              Contacts:{' '}
              {isLoading && <span className={s.loading}>Loading...</span>}
            </b>
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
