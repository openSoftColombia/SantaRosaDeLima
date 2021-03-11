import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Dropdown.css'

const MenuItems = [
  {
    title: 'Marketing',
    path: '/marketing',
    cName: 'dropdown-link'
  }, {
    title: 'Development',
    path: '/development',
    cName: 'dropdown-link'
  }, {
    title: 'Desing',
    path: '/desing',
    cName: 'dropdown-link'
  }, {
    title: 'Consulting',
    path: '/consulting',
    cName: 'dropdown-link'
  },
]

const Dropdown = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <React.Fragment>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Dropdown;