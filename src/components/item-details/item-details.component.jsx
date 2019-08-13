import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentItem } from '../../redux/item/item.selectors';

import './item-details.styles.scss';

const ItemDetails = ({ currentItem }) => {
  const { type, svg } = currentItem;

  return (
    <div 
      className='item-details-container'
      onClick={(event) => event.stopPropagation()}
    >
      <div className='item-preview'>
        <svg viewBox={`0 0 24 24`} className='svg-icon'>
          <path d={svg} />
        </svg>
      </div>
    </div>
  );
}

export default ItemDetails;