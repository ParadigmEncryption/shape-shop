import React from 'react';

import './item-details.styles.scss';

const ItemDetails = ({ currentItem }) => {
  const { type, svg } = currentItem;

  return (
    <div 
      className='item-details-container'
      onClick={(event) => event.stopPropagation()}
    >

      <div className='item-preview'>
        <div></div>
        <svg viewBox={`0 0 24 24`} className='svg-preview'>
          <path d={svg} />
        </svg>
        <button className='close-button'>&#10006;</button>
      </div>
      <div className='item-options'>
        <div className='item-title'>
          {type}
        </div>
      </div>
      
    </div>
  );
}

export default ItemDetails;