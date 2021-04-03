import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.module.scss';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Login Page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.form}
          autoComplete='off'
        >
          <label className={s.label}>
            <input
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            <input
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type='submit'>Login now</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
