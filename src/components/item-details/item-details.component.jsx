import React from 'react';

import './item-details.styles.scss';

const ItemDetails = ({ currentItem: { svg, transform } }) => (
  <div 
    className='item-details-container'
    onClick={(event) => event.stopPropagation()}
  >
    <svg viewBox={`0 0 24 24`} style={{transform}}>
      <path d={svg} />
    </svg>
  </div>
);

export default ItemDetails;