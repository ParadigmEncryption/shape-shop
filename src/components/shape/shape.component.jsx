import React from 'react';
import PropTypes from 'prop-types';

const config = {
  svg: {
    display: 'flex-inline',
    margin: '0 auto'
  }
};

const Shape = props => (
  <svg
    style={config.svg}
    width={`${props.size}`}
    height={`${props.size}`}
    viewBox={`0 0 512 512`}
    className={props.className}
  >
    <path d={props.shape} />
  </svg>
);

Shape.propTypes = {
  shape: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  className: PropTypes.string.isRequired
};

Shape.defaultProps = {
  size: 512
};

export default Shape;