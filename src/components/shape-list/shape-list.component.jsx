import React from 'react';

import svgData from '../../utils/svg-data';

import Shape from '../shape/shape.component';

import './shape-list.styles.scss';

const ShapeList = () => (
  <div className='svg-container'>
    { 
      svgData.map(({ id, svg, size, type, ...otherSVGDataProps }) => (
        <Shape key={id} shape={svg} size={size} type={type} {...otherSVGDataProps} />
      ))
    }
  </div>
)

export default ShapeList;