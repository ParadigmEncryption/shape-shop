import React from 'react';

import SvgDisplay from '../svg-display/svg-display.component';

import './cart-item.styles.scss';

const CartItem = ({ item: {svg, name} }) => (
  <div className='cart-item'>
    <SvgDisplay className='thumbnail' svg={svg} />
    <div className='item-details'>
      <span>{name}</span>
      <span>X</span>
    </div>
    
    </div>
    

)

export default CartItem;