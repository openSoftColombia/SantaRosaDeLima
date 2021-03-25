import React, { useState } from 'react';
import LogoColegioImg from './../../../assets/img/LogoColegio.svg';
import { NavLink, Link } from 'react-router-dom';

import './HeaderLayout.css';
import Dropdown from './Dropdown';

const HeaderLayout = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => setDropdown(true);

  const onMouseLeave = () => setDropdown(false);

  const onMouseEnter2 = () => setDropdown2(true);

  const onMouseLeave2 = () => setDropdown2(false);

  return (
    <nav className="navbar">
      <Link to='/Home' className="navbar-logo">
        <img src={LogoColegioImg} alt="LOGO" className="img" />
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times fa-times-x' : 'fas fa-bars'} />
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item' onClick={closeMobileMenu}>
          <NavLink exact to="/Home" className='nav-links fw-4' activeClassName="activeNav" onClick={closeMobileMenu}>
            Inicio
          </NavLink>
        </li>

        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <NavLink to="/AboutUs" activeClassName="activeNav" onClick={() => setDropdown(!dropdown)} className='nav-links fw-4'>
            Nosotros <i className={dropdown ? 'fal fa-times fa-xs' : 'fas fa-caret-down fa-xs'} />
          </NavLink>
          {dropdown && <Dropdown MenuItems={MenuItems} onClick={closeMobileMenu} />}
        </li>

        <li className='nav-item' onClick={closeMobileMenu}>
          <a href="#Notices" className='nav-links fw-4' onClick={closeMobileMenu}>
            Noticias
          </a>
        </li>

        <li className='nav-item' onClick={() => setDropdown2(!dropdown2)} onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
          <NavLink to="/AboutUs" className='nav-links fw-4' activeClassName="activeNav" >
            Comunicaciones <i className={dropdown2 ? 'fal fa-times fa-xs' : 'fas fa-caret-down fa-xs'} />
          </NavLink>
          {dropdown2 && <Dropdown MenuItems={MenuItems2} onClick={closeMobileMenu} />}
        </li>

        <li className='nav-item' onClick={closeMobileMenu}>
          <NavLink exact to="/Contact" className='nav-links fw-4' activeClassName="activeNav" onClick={closeMobileMenu}>
            Contactanos
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default HeaderLayout;

const MenuItems = [
  {
    title: 'Horizonte Institucional',
    items: [{
      title: 'Mision',
      path: '/AboutUs/Mission',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Vision',
      path: '/AboutUs/Vision',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Nuestros valores',
      path: '/AboutUs/OurValues',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Filosofia Intitucional',
      path: '/AboutUs/InsPhilosophy',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Axioma y Coloraria',
      path: '/AboutUs/Axioma&Coloraria',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Simbolos',
      path: '/AboutUs/Symbols',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Quienes somos',
      path: '/AboutUs/AboutUs',
      cName: 'dropdown-link fw-4'
    }]
  },
  {
    title: 'Comunidad Rosista',
    items: [{
      title: 'Personal Rosista',
      path: '/AboutUs/RosistaStaff',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Promosiones Rosista',
      path: '/AboutUs/RosistaPromotions',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Seleccion de Honor y Merito',
      path: '/AboutUs/Honor&Merit',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Familia Rosista',
      path: '/AboutUs/RosistaFamily',
      cName: 'dropdown-link fw-4'
    }],
  },
  {
    title: 'Gratitud Rosista',
    items: [{
      title: 'Santa Rosa de lima',
      path: '/AboutUs/SantaRosaDeLima',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Fiesta de gratitud',
      path: '/AboutUs/GratitudeParty',
      cName: 'dropdown-link fw-4'
    }]
  }
]

const MenuItems2 = [
  {
    title: 'Importantes',
    items: [{
      title: 'Circulares',
      path: '/Communications/Circular',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Cronograma',
      path: '/Communications/Schedule',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Horario de clase',
      path: '/Communications/ClassSchedule',
      cName: 'dropdown-link fw-4'
    }]
  }
]