import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { svgIconPaths } from '../../utils/svg-icon-paths';

import { selectCurrentItem } from '../../redux/item/item.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { addItem } from '../../redux/cart/cart.actions';

import SvgDisplay from '../svg-display/svg-display.component';

import './save-item-icon.styles.scss';

const SaveItemIcon = ({ currentItem, cartItems, addItem }) => (
  <div className='save-item'>
    <div 
      className='save-icon'
      onClick={() => addItem(currentItem)}>
      {
        cartItems.find(cartItem => cartItem.name === currentItem.name) 
        ? <SvgDisplay svg={svgIconPaths.saveIcon} />
        : <SvgDisplay svg={svgIconPaths.addToCartIcon} />
      }
    </div>  
  </div>
);


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem,
  cartItems: selectCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveItemIcon);