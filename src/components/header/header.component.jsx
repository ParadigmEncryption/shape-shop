import React from 'react';

import { ReactComponent as Logo } from '../../assets/svg-header/logo.svg';
import { ReactComponent as Cart } from '../../assets/svg-header/shopping-cart.svg';

import SearchBar from '../search-bar/search-bar.component';

import './header.styles.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      searchField: ''
    }
  }

  handleChange = (event) => {
    const searchField = event.target.value;
    this.setState({ searchField: searchField })
  }

  render() {
    return (
      <div className='header'>
        <div className='logo-container'>
          <Logo className='logo' />
        </div>
        <SearchBar 
          placeholder='Search Shapes' 
          handleChange={this.handleChange}
        />
        <div className='options-container'>
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
}

export default Header;