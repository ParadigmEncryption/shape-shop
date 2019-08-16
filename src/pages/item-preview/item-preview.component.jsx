import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';  // needed to get access to history because of Redirect
import { createStructuredSelector } from 'reselect';

import ItemToolbar from '../../components/item-toolbar/item-toolbar.component';
import ItemDetails from '../../components/item-details/item-details.component';
import ItemPreviewFooter from '../../components/item-preview-footer/item-preview-footer.component';

import { selectCurrentItem } from '../../redux/item/item.selectors';

import './item-preview.styles.scss';

const ItemPreviewPage = ({ history, currentItem }) => (
  <div 
    className='item-preview-page'
    onClick={() => history.push('/')}>
    <div className='item-preview'>
      <ItemToolbar currentItem={currentItem} />
      <ItemDetails currentItem={currentItem} />
      <Link className='close-button' to='/'>
        &#10006;
      </Link>
    </div>
    <ItemPreviewFooter currentItem={currentItem} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default withRouter(connect(mapStateToProps)(ItemPreviewPage));