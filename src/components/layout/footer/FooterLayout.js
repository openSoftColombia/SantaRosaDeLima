import React from 'react';
import FraceImg from './../../../assets/img/frace.svg'
import './FooterLayout.css'

const FooterLayout = () => (
  <React.Fragment>
    <div className="container mt-5 mb-2">
      <img src={FraceImg} alt='footer' />
    </div>
    <footer className="footer mb-5 pt-3 pb-3">
      <p className="fw-5 fz-3">© 2021 COLEGIO SANTA ROSA DE LIMA</p>
      <h6 className="fw-4 fz-1">Dirección: Calle 47 No 41- 33 Teléfonos: +(57) 5 - 3401208 -3404957 -3405032 -3401025 (PBX)</h6>
      <h6 className="fw-4 fz-1">Barranquilla, Atlántico - Colombia</h6>
      <h6 className="fw-4 fz-1">EMAIL: info@institutolasalle.edu.co</h6>
      <h6 className="fw-4 fz-1">Todos los derechos reservados OpenSoft Colombia</h6>
    </footer>
  </React.Fragment>
)

export default FooterLayout;