import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { svgIconPaths } from '../../utils/svg-icon-paths';

import { selectCurrentItem } from '../../redux/item/item.selectors';
import { addItem } from '../../redux/cart/cart.actions';

import SvgDisplay from '../svg-display/svg-display.component';

import './save-item-icon.styles.scss';

const SaveItemIcon = ({ currentItem, addItem }) => {

  return (
    <div className='save-item'>
      <div 
        className='save-icon'
        onClick={() => addItem(currentItem)}>
        <SvgDisplay svg={svgIconPaths.saveIcon} />
      </div>  
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveItemIcon);