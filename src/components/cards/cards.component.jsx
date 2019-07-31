import React from 'react';

import svgData from '../../utils/svg-data';

import Shape from '../shape/shape.component';

import './cards.styles.scss';

const shapes = svgData.map(icon => (
  <Shape key={icon.type} shape={icon.svg} className='svg-icon' size={220} />
));

const Cards = () => (
  <div className='svg-container'>
    { shapes }
  </div>
)

export default Cards;