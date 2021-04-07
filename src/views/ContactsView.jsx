// import { Component } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import s from './Views.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ContactsView = ({ isLoading, getContacts }) => {
  const classes = useStyles();

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div className={s.contactContainer}>
      <div>{isLoading && <LinearProgress className={classes.root} />}</div>
      <div className={s.filterWrapper}>
        <Filter />
      </div>
      <div className={s.wrap}>
        <div className={s.contactWrapper}>
          <ContactList />
        </div>
        <div className={s.formWrapper}>
          <Form />
        </div>
      </div>
    </div>
  );
};

// // =======

// class ContactsView extends Component {
//   componentDidMount() {
//     this.props.getContacts();
//   }

//   render() {
//     const { isLoading } = this.props;

//     return (
//       <Container>
//         <section className={s.contactSection}>
//           <h1 className={s.contactSection__title}>Phonebook</h1>
//           <div className={s.contactWrapper}>
//             <Filter />
//             <b className={s.subtitle}>
//               Contacts:{' '}
//               {isLoading && <span className={s.loading}>Loading...</span>}
//             </b>
//             <ContactList />
//           </div>
//           <div className={s.formWrapper}>
//             <Form
//             // onInputChange={this.handleInputFilter}
//             // onSubmit={this.handleSubmit}
//             />
//           </div>
//         </section>
//       </Container>
//     );
//   }
// }

// // =========

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  getContacts: contactsOperations.GET,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
