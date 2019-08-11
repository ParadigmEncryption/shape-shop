import React from 'react';
import { connect } from 'react-redux';

import { toggleItemWindow, setCurrentItem } from '../../redux/item/item.actions';

import ItemPreviewPage from '../../pages/item-preview/item-preview.component';

import './collection-item.styles.scss';


const CollectionItem = ({ item, toggleItemWindow, setCurrentItem }) => {
  const { svg, type } = item;

  return (
    <div className='shape-container'>
      <div 
        className='shape'
        onClick={() => {
          setCurrentItem(item);
          toggleItemWindow();
        }}
      >
        <svg viewBox={`0 0 24 24`} className='svg-icon'>
          <path d={svg} />
        </svg>
      </div>
      <div className='shape-footer'>
        <span className='type'>{type}</span>
        <span className='add-button'>&#10011;</span>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleItemWindow: () => dispatch(toggleItemWindow()),
  setCurrentItem: item => dispatch(setCurrentItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);