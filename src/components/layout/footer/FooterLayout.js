import React from 'react';
import FraceImg from './../../../assets/img/frace.svg'
import './FooterLayout.css'

const FooterLayout = () => (
  <React.Fragment>
    <img src={FraceImg} className="mb-5" alt='footer' />
    <footer className="footer mb-5 pt-3 pb-3">
      <p className="fw-5 fz-2">© 2009 INSTITUTO LA SALLE BARRANQUILLA</p>
      <p className="fw-4 fz-1">Dirección: Calle 47 No 41- 33 Teléfonos: +(57) 5 - 3401208 -3404957 -3405032 -3401025 (PBX)</p>
      <p className="fw-4 fz-1">Barranquilla, Atlántico - Colombia</p>
      <p className="fw-4 fz-1">EMAIL: info@institutolasalle.edu.co</p>
      <p className="fw-4 fz-1">Todos los derechos reservados OpenSoft Colombia</p>
    </footer>
  </React.Fragment>
)

export default FooterLayout;