import React from 'react';
import Button from 'react-bootstrap/Button';
import LogoColegioImg from './../../../assets/img/LogoColegio.svg';
import { NavLink } from 'react-router-dom';

import './HeaderLayout.css';

const HeaderLayout = () => (
  <header className="header">
    <div className="container cont">

      <div>
        <img src={LogoColegioImg} className="img scale-up-tl" />
      </div>

      <div className="div" style={{ marginLeft: 'auto' }}>
        <Button variant="light" className="buttonHeader scale-up-tr">
          <i class="fas fa-bars fa-lg" ></i>
        </Button>

        <ul className="ul scale-up-tr" id="menu">
          <li><NavLink exact to="/Home" activeClassName="activeNav"><a className="borderLeftRight">Inicio</a></NavLink></li>

          <li><a className="borderLeftRight subMenua">Nosotros</a>
            <ul className="subMenu slide-fwd-bottom">
              <li><NavLink exact to="/AboutUs/Mission" activeClassName="activeNav"><a className="fw-3 borderFade">Mision</a></NavLink></li>
              <li><NavLink exact to="/AboutUs/Vision" activeClassName="activeNav"><a className="fw-3 borderFade">Vision</a></NavLink></li>
              <li><NavLink exact to="/" activeClassName="activeNav"><a className="fw-3 borderFade">Principios</a></NavLink></li>
            </ul>
          </li>

          <li><NavLink exact to="/AboutUs" activeClassName="activeNav"><a className="borderLeftRight" >Noticias</a></NavLink></li>
          <li><NavLink exact to="/hi" activeClassName="activeNav"><a className="borderLeftRight" >Comunicaciones</a></NavLink></li>
          <li><NavLink exact to="/Gallery" activeClassName="activeNav"><a className="borderLeftRight" >Galeria</a></NavLink></li>
          <li><NavLink exact to="/hi" activeClassName="activeNav"><a className="borderLeftRight" >Bienestar Estudiantil</a></NavLink></li>
          <li><NavLink exact to="/hi" activeClassName="activeNav"><a className="borderLeftRight" >Contactanos</a></NavLink></li>
        </ul>
      </div>
    </div>
  </header>
);

export default HeaderLayout;