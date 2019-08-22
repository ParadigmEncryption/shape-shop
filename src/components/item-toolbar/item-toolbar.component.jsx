import React from 'react'

import { TOOLBAR_SVG_DATA } from '../../utils/toolbar-svg-data.js';

import ItemTools from '../item-tools/item-tools.component';

import './item-toolbar.styles.scss';

const ItemToolbar = ({ item }) => (
  <div className='toolbar-container'>
    {TOOLBAR_SVG_DATA.map(icon =>
      <ItemTools key={icon.id} tool={icon.id} title={icon.title} svg={icon.svg} item={item} />
    )}
  </div>
);


export default ItemToolbar;