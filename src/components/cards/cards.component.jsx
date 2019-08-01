import React from 'react';

import svgData from '../../utils/svg-data';

import Shape from '../shape/shape.component';

import './cards.styles.scss';

const Cards = () => (
  <div className='svg-container'>
    { 
      svgData.map(icon => (
        <Shape key={icon.id} shape={icon.svg} size={icon.size} className='svg-icon' />
      ))
    }
  </div>
)

export default Cards;