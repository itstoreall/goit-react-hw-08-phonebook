import { connect } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from '../../redux/contacts';
import { form, label, input, button } from './Form.module.scss';

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
    <form className={form}>
      <label className={label}>
        Name
        <input
          className={input}
          name='name'
          value={name}
          onChange={handleInputForm}
        />
      </label>

      <label className={label}>
        Number
        <input
          className={input}
          name='number'
          value={number}
          onChange={handleInputForm}
        />
      </label>

      <button className={button} tupe='submit' onClick={handleAddContact}>
        Add contact
      </button>
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
