import React from 'react';

import './current-item.styles.scss';

const CurrentItem = ({ item: { svg, transform } }) => (
  <div className='svg-display-container'>
    <svg viewBox={`0 0 24 24`} className='svg-display' transform={transform}>
      <path d={svg} />
    </svg>
  </div>
);

export default CurrentItem;