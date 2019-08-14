import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';  // needed to get access to history because of Redirect
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

export default withRouter(connect(mapStateToProps)(ItemPreviewPage));