import React from 'react';
import data from '../../utils/data';
import Shape from '../shape/shape.component';

import './cards.styles.scss';

const shapes = data.map(icon => (
  <Shape shape={icon.svg} className='svg-icon' size={2000} />
));

const Cards = () => (
  <React.Fragment>
    { shapes }
  </React.Fragment>
)

export default Cards;