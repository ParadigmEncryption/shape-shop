import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentItem } from '../../redux/item/item.actions';


import './collection-item.styles.scss';


const CollectionItem = ({ item, setCurrentItem }) => {
  const { svg, type } = item;

  return (
    <div className='shape-container'>
      <Link to='/preview'
        className='shape'
        onClick={() => setCurrentItem(item)}
      >
        <svg viewBox={`0 0 24 24`} className='svg-icon'>
          <path d={svg} />
        </svg>
      </Link>  
      <div className='shape-footer'>
        <span className='type'>{type}</span>
        <span className='add-button'>&#10011;</span>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setCurrentItem: item => dispatch(setCurrentItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);