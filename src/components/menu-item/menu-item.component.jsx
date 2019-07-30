import React from 'react';

import { ReactComponent as Plus } from '../../assets/plus.svg';

import './menu-item.styles.scss';

const MenuItem = ({ title }) => (
  <div className='shape-container'>
    <div className='shape'>
      <div className={title} />
    </div>
    <div className='shape-footer'>
      <span className='title'>{title}</span>
      <Plus className='plus' />
    </div>
  </div>
);

export default MenuItem;