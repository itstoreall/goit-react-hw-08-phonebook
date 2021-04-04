import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './Views.module.scss';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

// export default function InputAdornments() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     // amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
//   });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: '25ch',
//   },
// }));

class LoginView extends Component {
  state = {
    email: '',
    password: '',

    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChangeEmail = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  handleChange = (prop) => (event) => {
    console.log(event.target.value);
    console.log(prop);
    this.setState({ ...this.state, [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    console.log(5);
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // makeStyles = (theme) => ({
  //   // root: {
  //   //   display: 'flex',
  //   //   flexWrap: 'wrap',
  //   // },
  //   // margin: {
  //   //   margin: theme.spacing(1),
  //   // },
  //   // withoutLabel: {
  //   //   marginTop: theme.spacing(3),
  //   // },
  //   // textField: {
  //   //   width: '25ch',
  //   // },
  // });

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
              onChange={this.handleChangeEmail}
            />
          </label>

          <FormControl
            className={clsx(makeStyles.margin, makeStyles.textField)}
            variant='outlined'
          >
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              type={this.state.showPassword ? 'text' : 'password'}
              // value={values.password}
              onChange={this.handleChange('password')}
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

          {/* <label className={s.label}>
            <input
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </label> */}

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

/*
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
*/
