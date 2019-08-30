import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, value, handleChange, ...otherProps }) => (
  <div className='form-input-group'>
    <input 
      className='form-input'
      onChange={handleChange}
      { ...otherProps }
 
    />
    {
      label ?
      (<label 
        className={`${
          value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>)
      : null
    }
    
  </div>
);

export default FormInput;