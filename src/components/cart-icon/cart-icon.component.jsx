import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as CartSvg } from '../../assets/svg-header/shopping-cart.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, quantity }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <CartSvg className='shopping-icon' />
    { quantity ? 
      <span className='item-count'>
        {quantity}
      </span>
      : null }
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  quantity: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);