import React from 'react'

import { svgIconPaths } from '../../utils/svg-icon-paths';

import SvgDisplay from '../svg-display/svg-display.component';
import SaveItemIcon from '../save-item-icon/save-item-icon.component';

import './item-preview-footer.styles.scss';

const ItemPreviewFooter = ({ currentItem }) => (
  <div className='item-preview-footer'>
    <div className='footer-top'>
        <input 
            type='text' 
            className='item-name'
            value={currentItem.type}
          />
      <div>
        <SaveItemIcon />
      </div>
    </div>
    <div className='footer-bottom'>
      <div className='download-icon'>
        <SvgDisplay svg={svgIconPaths.downloadIcon} />
      </div> 
    </div>  
  </div>
);


export default ItemPreviewFooter;