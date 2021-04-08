import { connect } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from '../../redux/contacts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './Form.module.scss';

const Form = ({ state, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    setNumber('');
  };

  return (
    <form className={s.form}>
      <TextField
        id='name-outlined-basic'
        label='Name'
        variant='outlined'
        type='text'
        name='name'
        value={name} // *
        onChange={handleInputForm}
      />

      <TextField
        id='number-outlined-basic'
        label='Number'
        variant='outlined'
        type='tel'
        name='number'
        value={number} // *
        onChange={handleInputForm}
      />

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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
