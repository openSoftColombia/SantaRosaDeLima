import React from 'react';
import './Button.css';

const ButtonComponet = ({ name, icon, color, borderRadius, margin, size, width, colorText, url, type }) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className="button"
      style={{
        background: color || 'transparent',
        borderRadius: borderRadius || '5px',
        margin: margin || '0',
        width: width || '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

      }} >
      <h5 className={`fw-${size || '3'}`}
        style={{
          color: colorText || 'black',
          display: 'flex',
          alignItems: 'center'
        }}>
        {name} <i style={{ marginLeft: '10px' }} className={icon}></i></h5>
    </a>
  );
};

export default ButtonComponet;