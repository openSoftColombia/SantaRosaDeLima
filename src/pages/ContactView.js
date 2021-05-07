import React from 'react'
import './Contact.css'

const ContactView = () => {
  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <div className="row" style={{ margin: '14px', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="fw-5 TitleContact">Contactanos</h1>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.404691377535!2d-74.77979514533433!3d10.856792639083048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5ce02c99afcb5%3A0xdfe7aa841c497e03!2sColegio%20Santa%20Rosa%20de%20Lima!5e0!3m2!1ses!2sco!4v1616693676157!5m2!1ses!2sco" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div className="col-xl-4">
          <div className="row" style={{ margin: '14px', alignItems: 'center', justifyContent: 'center' }}>
            <h3 className="fw-4 TitleGallery">Encuéntranos</h3>
          </div>
          <div className="container">
            <div>
              <p style={{ fontSize: '18px', marginBottom: '3px' }}>Colegio Santa Rosa De Lima</p>
              <p style={{ fontSize: '18px', marginBottom: '3px' }}>Dirección: Cl. 12 #45</p>
              <p style={{ fontSize: '18px', marginBottom: '3px' }}>Barrio: El Carmen </p>
              <p style={{ fontSize: '18px', marginBottom: '3px' }}>Malambo, Atlántico</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: '14px', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="fw-5 TitleContact">Trabaje con nosotros</h1>
      </div>
      <h3 className="fw-4">Quieres trabajar con nosotros, envía tu hoja de vida aquí: <span className="TitleGallery">colsantarosadelima1@gmail.com</span></h3>
    </div>
  )
}

export default ContactView