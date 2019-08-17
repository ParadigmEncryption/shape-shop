import React from 'react';

import CurrentItem from '../current-item/current-item.component';

import './item-details.styles.scss';

const ItemDetails = ({ currentItem }) => {
  const { svg } = currentItem;

  return (
    <div 
      className='item-details-container'
      onClick={(event) => event.stopPropagation()}
    >
      <CurrentItem item={currentItem} />
    </div>
  );
}

export default ItemDetails;