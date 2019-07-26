import React from 'react'

import ShapePreview from '../../components/shape-preview/shape-preview.component';
import Shape from '../../components/shape/shape.component';

import './homepage.styles.scss';

const Homepage = props => {
  return (
    <div className='shape-layout'>
      <ShapePreview />
    </div>
  );
}

export default Homepage;