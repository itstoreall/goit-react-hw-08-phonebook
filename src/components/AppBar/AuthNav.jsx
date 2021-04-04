import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import s from './AppBar.module.scss';

const useStyles = makeStyles({
  authBtn: {
    marginLeft: 5,
    backgroundColor: '#6b7cb4',
    color: 'white',

    '&:hover': {
      backgroundColor: '#5064a3',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

const AuthNav = () => {
  const ms = useStyles();

  return (
    <div>
      <Button
        variant='contained'
        className={ms.authBtn}
        type='button'
        // onClick={onLogout}
      >
        {/* Registration */}
        <NavLink
          to='/register'
          exact
          className={s.authBtn}
          // activeClassName={s.activeLink}
        >
          Registration
        </NavLink>
      </Button>

      <Button
        variant='contained'
        className={ms.authBtn}
        type='button'
        // onClick={onLogout}
      >
        {/* Registration */}
        <NavLink
          to='/login'
          exact
          className={s.authBtn}
          // activeClassName={s.activeLink}
        >
          Login
        </NavLink>
      </Button>

      {/* <NavLink
      to='/register'
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Registration
    </NavLink> */}
      {/* <NavLink
        to='/login'
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Login
      </NavLink> */}
    </div>
  );
};

export default AuthNav;
