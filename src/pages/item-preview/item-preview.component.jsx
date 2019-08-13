import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ItemDetails from '../../components/item-details/item-details.component';

import { selectCurrentItem } from '../../redux/item/item.selectors';

import './item-preview.styles.scss';

const ItemPreviewPage = ({ history, currentItem }) => (
  <div 
    className='item-preview-page'
    onClick={() => history.push('/')}>
    <ItemDetails currentItem={currentItem} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default connect(mapStateToProps)(ItemPreviewPage);