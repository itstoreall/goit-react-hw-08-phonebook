import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import defaultAvatar from './default-avatar.png';
import s from './AppBar.module.scss';

// const useStyles = makeStyles({
//   logoutBtn: {
//     backgroundColor: '#6b7cb4',
//     color: 'white',

//     '&:hover': {
//       backgroundColor: '#5064a3',
//       boxShadow: 'none',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   },
// });

const UserMenu = ({ avatar, name, onLogout }) => {
  // const ms = useStyles();

  return (
    <div className={s.container}>
      <img src={avatar} alt='' width='32' className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>

      <Button
        variant='contained'
        className={s.authBtn}
        type='button'
        onClick={onLogout}
      >
        Logout
      </Button>
      {/* <button className={classes.logoutBtn} type='button' onClick={onLogout}>
        Logout
      </button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
