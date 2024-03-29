import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/svg-header/logo.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import SearchBar from '../search-bar/search-bar.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';

const Header = ({ hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options-container'>
        <SearchBar placeholder='Search SVG' />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);