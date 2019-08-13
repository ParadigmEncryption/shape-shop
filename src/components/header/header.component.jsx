import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svg-header/logo.svg';
import { ReactComponent as Cart } from '../../assets/svg-header/shopping-cart.svg';

import SearchBar from '../search-bar/search-bar.component';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options-container'>
        <SearchBar placeholder='Search Shapes' />
      <div className='sign-in'>
        SIGN IN
      </div>
      <div className='option'>
        <Cart className='shopping-cart' />
      </div>
    </div>
  </div>
);

export default (Header);