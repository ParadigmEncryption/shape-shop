import React from 'react';
import PropTypes from 'prop-types';

const config = {
  svg: {

    display: 'block',
    margin: 'auto'

  }
};

const Shape = props => (
  <svg
    style={config.svg}
    width={`${props.size}`}
    height={`${props.size}`}
    viewBox={`0 0 25 25`}
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
  size: '240px'
};

export default Shape;