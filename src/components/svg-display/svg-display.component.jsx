import React from 'react';

import './svg-display.styles.scss';

const SvgDisplay = ({ svg, viewBox, ...props }) => (
  <div className='svg-display-container'>
    <svg viewBox={`0 0 24 24`} className='svg-display'>
      <path d={svg} />
    </svg>
  </div>
);

export default SvgDisplay;