import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.module.scss';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  handlePasswordChange = (prop) => (event) => {
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.formWrap}>
        <h1>Registration</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.form}
          autoComplete='off'
        >
          <TextField
            id='name-outlined-basic'
            label='Name'
            variant='outlined'
            className={s.input}
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
          />

          <TextField
            id='email-outlined-basic'
            label='Email'
            variant='outlined'
            className={s.input}
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />

          <FormControl
            className={s.input}
            // className={clsx(makeStyles.margin, makeStyles.textField)}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              type={this.state.showPassword ? 'text' : 'password'}
              // value={values.password}
              onChange={this.handlePasswordChange('password')}
              id='outlined-adornment-password'
              // type='password'
              name='password'
              value={password}
              // onChange={this.handleChange}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge='end'
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <Button
            variant='contained'
            className={s.formBtn}
            type='submit'
            // onClick={onLogout}
          >
            Register now
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.module.scss';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    showPassword: false,
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

*/
