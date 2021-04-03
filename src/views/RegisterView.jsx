import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.module.scss';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Registration Page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.form}
          autoComplete='off'
        >
          <label className={s.label}>
            Name
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            E-mail
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            Password
            <input
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type='submit'>Register now</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
