import React from 'react';
import './Button.css';

const ButtonComponet = ({ name, icon }) => {
  return (
    <button className="button"><h3 className="fw-4">{name} <i class={icon}></i></h3></button>
  );
};

export default ButtonComponet;