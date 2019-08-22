import React from 'react';
import { connect } from 'react-redux'

import { removeItem } from '../../redux/cart/cart.actions.js';

// import SvgDisplay from '../svg-display/svg-display.component';
import ItemDetails from '../item-details/item-details.component';

import './cart-item.styles.scss';

const CartItem = ({ item, removeItem }) => (
  <div className='cart-item'>
    <div className='thumbnail'>
      <ItemDetails item={item} />
    </div>
    <div className='cart-item-footer'>
      <div className='name'>
        {item.name}
      </div>
      <div className='remove-button' onClick={() => removeItem(item)}>
        &#10006;
      </div>
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);