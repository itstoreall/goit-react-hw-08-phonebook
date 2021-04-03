import React, { Component } from 'react';
import s from './Views.module.scss';

class LoginView extends Component {
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

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Registration Page</h1>

        <form onSubmit={this.handleSubmit} className={s.form}>
          <label className={s.label}>
            <input
              type='text'
              name='name'
              value={name}
              onchange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            <input
              type='email'
              name='email'
              value={email}
              onchange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            <input
              type='password'
              name='password'
              value={password}
              onchange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default LoginView;
