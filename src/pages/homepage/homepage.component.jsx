import React from 'react'

import Directory from '../../components/directory/directory.component';
import Cards from '../../components/cards/cards.component';

import './homepage.styles.scss';

const Homepage = props => {
  return (
    <div className='homepage'>
      <Cards />
      <Directory />
    </div>
  );
}

export default Homepage;