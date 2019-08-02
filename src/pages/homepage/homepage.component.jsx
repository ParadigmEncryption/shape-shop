import React from 'react'

import Directory from '../../components/directory/directory.component';
import ShapeList from '../../components/shape-list/shape-list.component';

import './homepage.styles.scss';

const Homepage = props => {
  return (
    <div className='homepage'>
      <Directory />
      <ShapeList />
    </div>
  );
}

export default Homepage;