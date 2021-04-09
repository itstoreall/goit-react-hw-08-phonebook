import { connect } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from '../../redux/contacts';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './Form.module.scss';

// import { Formik } from 'formik';

const ContactForm = ({ state, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('+38 ');

  // Записывает значение инпута в стейт
  const handleInputForm = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  // Создает объект контакта
  const handleAddContact = (e) => {
    e.preventDefault();

    state.contacts.items.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : onSubmit({
          name: name,
          number: number,
        });

    setName('');
    setNumber('+38 ');
  };

  return (
    <form className={s.form}>
      {/* <TextField
        id='name-outlined-basic'
        label='Name'
        variant='outlined'
        type='text'
        name='name'
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        // required
        value={name} // *
        onChange={handleInputForm}
      /> */}
      <input
        id='name-outlined-basic2'
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name} // *
        onChange={handleInputForm}
      />

      <input
        id='number-outlined-basic2'
        type='tel'
        name='number'
        label='Number'
        pattern='(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})'
        title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
        required
        value={number} // *
        onChange={handleInputForm}
      />

      {/* <TextField
        id='number-outlined-basic'
        label='Number'
        variant='outlined'
        type='tel'
        name='number'
        // pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
        // title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
        // pattern='\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4}'
        // title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
        // required
        value={number} // *
        onChange={handleInputForm}
      /> */}

      <Button
        variant='contained'
        className={s.formBtn}
        type='submit'
        onClick={handleAddContact}
      >
        Add contact
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {
  onSubmit: contactsOperations.ADD,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
