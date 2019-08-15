import React from 'react'

import { svgPaths } from '../../utils/svg-paths';

import SvgDisplay from '../svg-display/svg-display.component';

import './item-preview-footer.styles.scss';

const ItemPreviewFooter = ({ currentItem }) => {
 
  const downloadIcon = svgPaths.arrowDownload;
  const saveIcon = svgPaths.diskFloppy;

  return (
  <div 
    className='item-preview-footer'
    onClick={(event) => event.stopPropagation()}
  >
    <div>
    {currentItem.type}
    </div>
    <div className='icon'>
      <SvgDisplay svg={downloadIcon} />
    </div>
    <div className='icon'>
      <SvgDisplay svg={saveIcon} />
    </div>
    
  </div>
  );
}

export default ItemPreviewFooter;