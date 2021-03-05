import React from 'react';
import './Button.css';

const ButtonComponet = ({ name, icon }) => {
  return (
    <button className="button"><span className="fz-2">{name} <i class={icon}></i></span></button>
  );
};

export default ButtonComponet;