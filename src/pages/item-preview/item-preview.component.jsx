import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentItem } from '../../redux/item/item.selectors';

const ItemPreviewPage = () => (
  <div className='item-preview-window'>
    <span>This is an item preview</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default connect(mapStateToProps)(ItemPreviewPage);