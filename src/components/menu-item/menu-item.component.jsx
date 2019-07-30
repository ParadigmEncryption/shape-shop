import React from 'react';

import { ReactComponent as Add } from '../../assets/add.svg';

import './menu-item.styles.scss';

const MenuItem = props => (
  <div className='shape-container'>
    <div className='shape'>
      <div className='diamond' />
    </div>
    <div className='shape-footer'>
      <span className='name'>DIAMOND</span>
      <Add className='add' />
    </div>
  </div>
);

export default MenuItem;