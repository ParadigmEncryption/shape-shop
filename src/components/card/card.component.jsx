import React from 'react';

import './card.styles.scss';

const Card = ({ shape, type }) => (
  <div className='card-container'>
    <div className='shape'>
      <div className={shape} />
    </div>
    <div className='shape-footer'>
      <span className='type'>{type}</span>
      <Plus className='plus' />
    </div>
  </div>
);

export default Card;