import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentItem } from '../../redux/item/item.actions';

import SvgDisplay from '../svg-display/svg-display.component';

import './collection-item.styles.scss';


const CollectionItem = ({ item, setCurrentItem }) => {
  const { id, svg, name } = item;

  return (
    <div className='shape-container'>
      <div 
        className='shape'
        onClick={() => setCurrentItem(item)}
      >
        <Link to={`/preview/${id}`}>
          <SvgDisplay svg={svg} />
        </Link>  
      </div>

      <div className='shape-footer'>
        <span className='type'>{name}</span>
        <span className='add-button'>&#10011;</span>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setCurrentItem: item => dispatch(setCurrentItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);