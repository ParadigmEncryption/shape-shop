import React from 'react';

import SvgDisplay from '../svg-display/svg-display.component';

import './item-details.styles.scss';

const ItemDetails = ({ currentItem }) => {
  const { svg } = currentItem;

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