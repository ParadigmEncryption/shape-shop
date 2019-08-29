import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import SaveItemIcon from '../save-item-icon/save-item-icon.component';
import DownloadItemIcon from '../download-item-icon/download-item-icon.component';

import { setItemName, clearCurrentItem } from '../../redux/item/item.actions';
import { selectItemName } from '../../redux/item/item.selectors';

import './item-preview-footer.styles.scss';

const ItemPreviewFooter = ({ itemName, onNameChange, history, clearCurrentItem }) => (
  <div className='item-preview-footer'>
    <div className='footer-top'>
        <input 
            type='text' 
            className='item-name'
            value={itemName}
            maxLength='20'
            onChange={event => onNameChange(event)}
          />
      <div className='save-button' 
        onClick={() => {
          history.goBack();
          clearCurrentItem();
      }}>
        <SaveItemIcon />
      </div>
    </div>
    <div className='footer-bottom'>
      <div className='download-icon'>
        <DownloadItemIcon />
      </div> 
    </div>  
  </div>
);

const mapDispatchToProps = dispatch => ({
  onNameChange: event => dispatch(setItemName(event.target.value)),
  clearCurrentItem: () => dispatch(clearCurrentItem())
});

const mapStateToProps = createStructuredSelector({
  itemName: selectItemName
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemPreviewFooter));