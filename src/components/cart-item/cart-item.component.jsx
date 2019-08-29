import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeItem } from '../../redux/cart/cart.actions';
import { setCurrentItem } from '../../redux/item/item.actions';

import ItemDetails from '../item-details/item-details.component';
import DownloadButtonIcon from '../download-item-icon/download-item-icon.component';

import './cart-item.styles.scss';

const CartItem = ({ item, removeItem, setCurrentItem }) => (
  <div className='cart-item'>
    <Link className='thumbnail' to='preview' onClick={() => setCurrentItem(item)}> 
       <ItemDetails item={item} />
    </Link>
    <div className='cart-item-footer'>
      <div className='name'>
        {item.name}
      </div>
      <div className='remove-button' onClick={() => removeItem(item)}>
        &#10006;
      </div>
      <div className='download-button'>
        <DownloadButtonIcon />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  setCurrentItem: item => dispatch(setCurrentItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);