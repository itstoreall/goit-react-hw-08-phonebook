import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './AppBar.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => {
  console.log(name);
  return (
    <div className={s.container}>
      <img src={avatar} alt='' width='32' className={s.avatar} />
      <span className={s.name}>Welcome, {name}</span>
      <button type='button' onClick={onLogout}>
        Logout
      </button>
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
