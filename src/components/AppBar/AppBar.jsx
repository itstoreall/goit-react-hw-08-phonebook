import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import s from './AppBar.module.scss';

const AppBar = ({ isAuthentificated }) => (
  <header style={s.header}>
    <Navigation />
    {isAuthentificated ? <UserMenu /> : <AuthNav />}
  </header>
);

export default AppBar;
