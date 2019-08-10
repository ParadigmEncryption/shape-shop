import React from 'react'

import Directory from '../../components/directory/directory.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './homepage.styles.scss';

const Homepage = props => {
  return (
    <div className='homepage'>
      <Directory />
      <CollectionPreview />
    </div>
  );
}

export default Homepage;