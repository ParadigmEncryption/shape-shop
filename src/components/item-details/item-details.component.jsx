import React from 'react';
import { Link } from 'react-router-dom';

import SvgDisplay from '../svg-display/svg-display.component';

import './item-details.styles.scss';

const ItemDetails = ({ currentItem }) => {
  const { type, svg } = currentItem;

  return (
    <div 
      className='item-details-container'
      onClick={(event) => event.stopPropagation()}
    >
      <SvgDisplay svg={svg} />
    </div>
  );
}

export default ItemDetails;