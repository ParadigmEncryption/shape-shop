import React from 'react';
import { connect } from 'react-redux';

import { SVG_DATA } from '../../utils/svg-data';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ searchField }) => (
  <div className='svg-container'>
    { 
      SVG_DATA.map(({ id, svg, size, type, ...otherSVGDataProps }) => {
        if (type.toLowerCase().includes(searchField.toLowerCase())) {
          return <CollectionItem key={id} shape={svg} size={size} type={type} {...otherSVGDataProps} />
        } else {
          return null;
        }
      })
    }
  </div>
)

const mapStateToProps = state => ({
  searchField: state.search.searchField
})

export default connect(mapStateToProps)(CollectionPreview);