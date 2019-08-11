import React from 'react';
import { connect } from 'react-redux';

import { SVG_DATA } from '../../utils/svg-data';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ searchField }) => (
  <div className='svg-container'>
    {SVG_DATA.filter(item => 
      item.type.toLowerCase().includes(searchField.toLowerCase()))
      .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  searchField: state.search.searchField
})

export default connect(mapStateToProps)(CollectionPreview);