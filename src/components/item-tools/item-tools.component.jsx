import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { rotateItem } from '../../redux/item/item.actions';
import { selectCurrentItemTransform } from '../../redux/item/item.selectors';

import SvgDisplay from '../svg-display/svg-display.component';

import './item-tools.styles.scss';


const ItemTools = ({ tool, title, svg, currentItem, rotateItem }) => {
  

  return (
    <button title={title} onClick={() => rotateItem(currentItem)}>
      <SvgDisplay svg={svg} />
    </button>
  );
}

const mapDispatchToProps = dispatch => ({
  rotateItem: item => dispatch(rotateItem(item))
});

// const mapStateToProps = createStructuredSelector({
//   transform: selectCurrentItemTransform
// })

export default connect(null, mapDispatchToProps)(ItemTools);