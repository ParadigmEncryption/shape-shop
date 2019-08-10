import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/svg-header/logo.svg';
import { ReactComponent as Cart } from '../../assets/svg-header/shopping-cart.svg';

import SearchBar from '../search-bar/search-bar.component';

import './header.styles.scss';
import { setSearchField } from '../../redux/search/search.actions';

const Header = () => {

  // const handleChange = (event) => {
  //   const searchField = event.target.value;
  //   this.setState({ searchField: searchField })
  // }
  return (
    <div className='header'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <div className='options-container'>
          <SearchBar 
            placeholder='Search Shapes' 
            // handleChange={this.handleChange}
          />
        <div className='sign-in'>
          SIGN IN
        </div>
        <div className='option'>
          <Cart className='shopping-cart' />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  searchField: state.search.searchField
});

const mapDispatchToProps = dispatch => ({
  setSearchField: search => dispatch(setSearchField(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);