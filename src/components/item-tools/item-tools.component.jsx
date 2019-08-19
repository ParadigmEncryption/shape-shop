import React from 'react';
import { connect } from 'react-redux';
import { rotateItem, flipXItem } from '../../redux/item/item.actions';

import SvgDisplay from '../svg-display/svg-display.component';

import './item-tools.styles.scss';


const ItemTools = ({ tool, title, svg, currentItem, flipXItem, rotateItem }) => {
  const handleClick = () => {
    switch (tool) {
      case 'strokeColor':
        return;
      case 'fillColor':
        return;
      case 'strokeWidth':
        return;
      case 'flipX':
        return flipXItem(currentItem);
      case 'flipY':
          return;
      case 'rotate':
        return rotateItem(currentItem);
      default: 
        return currentItem;
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
  flipXItem: item => dispatch(flipXItem(item))
});

// const mapStateToProps = createStructuredSelector({
//   transform: selectCurrentItemTransform
// })

export default connect(null, mapDispatchToProps)(ItemTools);