import React from 'react';

import { svgIconPaths } from '../../utils/svg-icon-paths';

import SvgDisplay from '../svg-display/svg-display.component';

import './download-item-icon.styles.scss';


const DownloadItemIcon = () => (
    <div className='download-item-icon'>
      <SvgDisplay svg={svgIconPaths.downloadIcon} />
    </div>
);

export default DownloadItemIcon;