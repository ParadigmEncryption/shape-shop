import React from 'react';

import './item-details.styles.scss';

const ItemDetails = ({ item: { svg, fill='#cfcfcf', rotate='', scale='', strokeWidth = 0 }}) => (
  <div className='item-details'>
    <svg 
      viewBox={`0 0 24 24`} 
      style={{
        transform: rotate + scale,
        fill: fill
      }}
    >
      <path d={svg} strokeWidth={strokeWidth} />
    </svg>
  </div>
);

export default ItemDetails;