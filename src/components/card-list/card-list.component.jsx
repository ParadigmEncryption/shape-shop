import React from 'react';

import svgData from '../../utils/svg-data';

import Shape from '../shape/shape.component';

import './card-list.styles.scss';

const CardList = () => (
  <div className='svg-container'>
    { 
      svgData.map(({ id, svg, size, type, ...otherSVGDataProps }) => (
        <Shape key={id} shape={svg} size={size} type={type} {...otherSVGDataProps} />
      ))
    }
  </div>
)

export default CardList;