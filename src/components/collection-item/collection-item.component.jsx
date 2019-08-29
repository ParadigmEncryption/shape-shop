import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentItem } from '../../redux/item/item.actions';
import { addItem } from '../../redux/cart/cart.actions';

import SvgDisplay from '../svg-display/svg-display.component';

import './collection-item.styles.scss';


const CollectionItem = ({ item, setCurrentItem, addItem }) => {
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
        <span className='name'>
          {name}
        </span>
        <button 
          className='add-button'
          onClick={() => addItem(item)}
        >
          &#10011;
        </button>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setCurrentItem: item => dispatch(setCurrentItem(item)),
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);