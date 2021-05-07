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
      <h6 className="fw-4 fz-1">Dirección: Cl. 12 #45 Teléfonos: +(57) 5 - 376 4323 - 376 4343 (PBX)</h6>
      <h6 className="fw-4 fz-1">Barrio: El Carmen Malambo, Atlántico- Colombia</h6>
      <h6 className="fw-4 fz-1">Email: colsantarosadelima1@gmail.com</h6>
      <h6 className="fw-4 fz-1">Todos los derechos reservados OpenSoft Colombia</h6>
    </footer>
  </React.Fragment>
)

export default FooterLayout;