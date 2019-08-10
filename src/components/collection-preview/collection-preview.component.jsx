import React from 'react';

import svgData from '../../utils/svg-data';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = () => (
  <div className='svg-container'>
    { 
      svgData.map(({ id, svg, size, type, ...otherSVGDataProps }) => (
        <CollectionItem key={id} shape={svg} size={size} type={type} {...otherSVGDataProps} />
      ))
    }
  </div>
)

export default CollectionPreview;