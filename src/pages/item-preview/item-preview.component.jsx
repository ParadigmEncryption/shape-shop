import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import ItemToolbar from '../../components/item-toolbar/item-toolbar.component';
import ItemDetails from '../../components/item-details/item-details.component';
import ItemPreviewFooter from '../../components/item-preview-footer/item-preview-footer.component';

import { selectCurrentItem } from '../../redux/item/item.selectors';

import './item-preview.styles.scss';

const ItemPreviewPage = ({ currentItem, history }) => (
  <div className='item-preview-page'>
    <div className='item-preview'>
      <ItemToolbar item={currentItem} />
      <div className='item-details-container'>
        <ItemDetails item={currentItem} />
      </div>
      <button className='close-button' onClick={history.goBack}>
        &#10006;
      </button>
    </div>
    <ItemPreviewFooter />
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default withRouter(connect(mapStateToProps)(ItemPreviewPage));