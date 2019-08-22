import React from 'react';
import { connect } from 'react-redux';
import { rotateItem, flipXItem, flipYItem } from '../../redux/item/item.actions';

import SvgDisplay from '../svg-display/svg-display.component';

import './item-tools.styles.scss';


const ItemTools = ({ tool, title, svg, item, flipXItem, flipYItem, rotateItem }) => {
  const handleClick = () => {
    switch (tool) {
      case 'strokeColor':
        return;
      case 'fillColor':
        return;
      case 'strokeWidth':
        return;
      case 'flipX':
        return flipXItem(item);
      case 'flipY':
        return flipYItem(item);
      case 'rotate':
        return rotateItem(item);
      default: 
        return item;
    }
  }

  return (
    <div title={title} onClick={handleClick}>
      <SvgDisplay svg={svg} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  rotateItem: item => dispatch(rotateItem(item)),
  flipXItem: item => dispatch(flipXItem(item)),
  flipYItem: item => dispatch(flipYItem(item))
});

export default connect(null, mapDispatchToProps)(ItemTools);