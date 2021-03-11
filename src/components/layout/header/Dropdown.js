import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Dropdown.css'

const Dropdown = ({ MenuItems }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  let index = -1;

  console.log(MenuItems);
  return (
    <React.Fragment>
      {
        MenuItems?.map(({ title, items }) => {
          index = index + 1;
          return (
            <ul key={index} onClick={handleClick} className={click ? `dropdown-menu-header-${index + 1} dropdown-menu-header clicked fw-5` : `dropdown-menu-header dropdown-menu-header-${index + 1} fw-5`}>
              <li className="dropdown-title">{title}</li>
              {
                items?.map(({ cName, path, title, index }) => {
                  return (
                    <li key={index}>
                      <NavLink exact to={path} className={cName} activeClassName="active" onClick={() => setClick(false)}>
                        {title}
                      </NavLink>
                    </li>
                  );
                }
                )}
            </ul>
          )
        })
      }
    </React.Fragment>
  );
}

export default Dropdown;