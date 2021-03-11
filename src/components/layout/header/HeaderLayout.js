import React, { useState } from 'react';
import LogoColegioImg from './../../../assets/img/LogoColegio.svg';
import { NavLink, Link } from 'react-router-dom';

import './HeaderLayout.css';
import Dropdown from './Dropdown';

const HeaderLayout = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  return (
    <nav className="navbar">
      <Link to='./Home' className="navbar-logo">
        <img src={LogoColegioImg} alt="LOGO" className="img" />
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <NavLink exact to="/Home" className='nav-links' activeClassName="activeNav" onClick={closeMobileMenu}>
            Inicio
          </NavLink>
        </li>

        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <NavLink exact to="/AboutUs" className='nav-links' activeClassName="activeNav" onClick={closeMobileMenu}>
            Nosotros
          </NavLink>
          {dropdown && <Dropdown />}
        </li>

        <li className='nav-item'>
          <NavLink exact to="/H1" className='nav-links' activeClassName="activeNav" onClick={closeMobileMenu}>
            Noticias
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink exact to="/Comunicaciones" className='nav-links' activeClassName="activeNav" onClick={closeMobileMenu}>
            Comunicaciones
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink exact to="/Gallery" className='nav-links' activeClassName="activeNav" onClick={closeMobileMenu}>
            Galeria
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink exact to="/hi" className='nav-links' activeClassName="activeNav" onClick={closeMobileMenu}>
            Bienestar Estudiantil
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink exact to="/hi" className='nav-links' activeClassName="activeNav" onClick={closeMobileMenu}>
            Contactanos
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default HeaderLayout;