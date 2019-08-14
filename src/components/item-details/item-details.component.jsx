import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Rotate } from '../../assets/svg-options/rotate-clockwise.svg';
import { ReactComponent as Paint } from '../../assets/svg-options/paint-roller.svg';

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
        <Link 
          className='close-button'
          to='/'
        >
          &#10006;
        </Link>
      </div>
      <div className='item-options'>
        <div className='item-title'>
          {type}
        </div>
        <div>
          <Paint className='paint-roller' />  
        </div>
        <div>
          <Rotate className='rotate' />
        </div>
        <button className='add-button' title='Add to Cart'>
          &#10010;
        </button>
      </div>
      
    </div>
  );
}

export default ItemDetails;