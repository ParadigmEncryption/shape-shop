import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignIn from '../sign-in/sign-in.component';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './sidebar.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='sidebar'>
    <div className='options'>
    
    </div>

    <SignIn />

    <div className='cart-items'>
      { cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.name} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <div className='download-all-button'>
      <CustomButton>
        Download All
      </CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);