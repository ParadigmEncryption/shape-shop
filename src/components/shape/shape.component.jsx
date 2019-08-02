import React from 'react';
import PropTypes from 'prop-types';

import './shape.styles.scss';

const config = {
  svg: {
    display: 'block',
    margin: 'auto'
  }
};

const Shape = props => (
  <div className='shape-container'>
  <div className='shape'>
    <svg
      style={config.svg}
      width={`${props.size}`}
      height={`${props.size}`}
      viewBox={`0 0 25 25`}
      className='svg-icon'
    >
      <path d={props.shape} />
    </svg>
  </div>
  <div className='shape-footer'>
    <span className='type'>{props.type}</span>
    <span className='plus'>+</span>
  </div>
</div>

);

Shape.propTypes = {
  shape: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};

Shape.defaultProps = {
  size: '240px'
};

export default Shape;