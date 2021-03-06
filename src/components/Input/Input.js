import React, { PropTypes } from 'react';
import styles from './Input.css';

const Input = ({ id, className, type, placeholder, name, text, value, onChange, onKeyDown, onBlur }) => (
  <div className={styles.base}>
    <label
      type={type}
      htmlFor={name}
    >
      {text}
    </label>
    <input id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      text={text}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  </div>
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
