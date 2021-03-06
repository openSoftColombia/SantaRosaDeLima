import React, { useState } from 'react';
import Colegio from './../../../assets/img/Colegio-01.svg';
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
        <img src={Colegio} alt="LOGO" className="img" />
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
          <NavLink to="/Communications" className='nav-links fw-4' activeClassName="activeNav" >
            Comunicaci??n <i className={dropdown2 ? 'fal fa-times fa-xs' : 'fas fa-caret-down fa-xs'} />
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
      title: 'Misi??n y Visi??n',
      path: '/AboutUs/Vision&Mission',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Filosof??a Institucional',
      path: '/AboutUs/InstitutionalPhilosophy',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Axioma y Corolario',
      path: '/AboutUs/Axioma&Corolario',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'S??mbolos',
      path: '/AboutUs/Symbols',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Qui??nes Somos',
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
      title: 'Promociones Rosista',
      path: '/AboutUs/RosistaPromotions',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Selecci??n de Honor y M??rito',
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
      title: 'Santa Rosa de Lima',
      path: '/AboutUs/SantaRosaDeLima',
      cName: 'dropdown-link fw-4'
    }, {
      title: 'Fiesta de Gratitud',
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