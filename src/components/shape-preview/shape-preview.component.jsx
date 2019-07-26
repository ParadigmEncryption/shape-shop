import React from 'react';

import Shape from '../shape/shape.component';

import './shape-preview.styles.scss';

const ShapePreview = props => (
  <div className='shape-preview'>
    <Shape />
    <Shape />
    <Shape />
  </div>
);

export default ShapePreview;