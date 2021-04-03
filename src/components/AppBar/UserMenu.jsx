import React from 'react';
import s from './AppBar.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.cantainer}>
    <img className={s.avatar} src={avatar} alt='' width='32' />
    <span className={s.name}>Welcome, {name}</span>
    <button type='button' onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
