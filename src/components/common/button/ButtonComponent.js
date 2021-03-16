import React from 'react';
import './Button.css';
import { Redirect } from 'react-router-dom';

const ButtonComponet = ({ name, icon, color, borderRadius, margin, size, width, colorText, url }) => {
  return (
    <button type="submit" className="button"
      style={{
        background: `${color || 'transparent'}`,
        borderRadius: `${borderRadius || '0'}`,
        margin: `${margin || '0'}`,
        width: `${width || '100%'}`
      }} >
      <h5 className={`fw-${size || '3'}`}
        style={{
          color: `${colorText || 'black'}`
        }}>
        {name} <i class={icon}></i></h5>
    </button>
  );
};

export default ButtonComponet;