import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentItem } from '../../redux/item/item.selectors';

import './item-preview.styles.scss';

const ItemPreviewPage = () => (
  <div className='item-preview-window'>
    <div className='item-preview'>
      <span>This is an item preview</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default connect(mapStateToProps)(ItemPreviewPage);