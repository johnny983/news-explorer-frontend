import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button type="submit" className={`input_button ${props.className}`}>
      {props.title}
    </button>
  );
}

export default Button;
