import React from 'react'

import Directory from '../../components/directory/directory.component';
import CardList from '../../components/card-list/card-list.component';

import './homepage.styles.scss';

const Homepage = props => {
  return (
    <div className='homepage'>
      <CardList />
    </div>
  );
}

export default Homepage;