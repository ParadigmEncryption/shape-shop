import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title }) => (
  <div className='menu-item-container'>
    <div className='menu-item'>
      <div className={title} />
    </div>
    <div className='menu-item-footer'>
      <span className='title'>{title.toUpperCase()}</span>
    </div>
  </div>
);

export default MenuItem;