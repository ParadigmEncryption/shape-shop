import React from 'react'

import { TOOLBAR_SVG_DATA } from '../../utils/toolbar-svg-data.js';

import SvgDisplay from '../svg-display/svg-display.component';

import './item-toolbar.styles.scss';

const ItemToolbar = () => {


 // map individual components instead of SvgDisplay


  return (
    <div 
      className='toolbar-container'
      onClick={(event) => event.stopPropagation()}
    >
      {TOOLBAR_SVG_DATA.map(icon =>
        <SvgDisplay key={icon.id} svg={icon.svg} title={icon.title} />
        )
      }
    </div>
  );
}

export default ItemToolbar;