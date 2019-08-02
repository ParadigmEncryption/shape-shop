import React from 'react';

import './shape.styles.scss';

const Shape = props => (
  <div className='shape-container'>
    <div className='shape'>
      <svg viewBox={`0 0 24 24`} className='svg-icon'>
        <path d={props.shape} />
      </svg>
    </div>
    <div className='shape-footer'>
      <span className='type'>{props.type}</span>
      <span className='plus'>+</span>
    </div>
  </div>
);

export default Shape;