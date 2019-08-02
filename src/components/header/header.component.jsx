import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Cart } from '../../assets/shopping-cart.svg';



import './header.styles.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='logo-container'>
          <Logo className='logo' />
        </div>
        <div className='options'>
          <div className='option'>
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