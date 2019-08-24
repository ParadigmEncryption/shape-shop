import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import ItemToolbar from '../../components/item-toolbar/item-toolbar.component';
import ItemDetails from '../../components/item-details/item-details.component';
import ItemPreviewFooter from '../../components/item-preview-footer/item-preview-footer.component';

import { clearCurrentItem } from '../../redux/item/item.actions';
import { selectCurrentItem } from '../../redux/item/item.selectors';

import './item-preview.styles.scss';

const ItemPreviewPage = ({ currentItem, history, clearCurrentItem }) => (
  <div className='item-preview-page'>
    <div className='item-preview'>
      <ItemToolbar item={currentItem} />
      <div className='item-details-container'>
        <ItemDetails item={currentItem} />
      </div>
      <button className='close-button' 
        onClick={() => {
          history.goBack();
          clearCurrentItem();
      }}>
        &#10006;
      </button>
    </div>
    <ItemPreviewFooter />
  </div>
);

const mapDispatchToProps = dispatch => ({
  clearCurrentItem: () => dispatch(clearCurrentItem())
})

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemPreviewPage));