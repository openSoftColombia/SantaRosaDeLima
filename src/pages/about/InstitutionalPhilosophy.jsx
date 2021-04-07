import React from 'react'
import imgValores from './../../assets/img/valores.svg'
import imgModelo from './../../assets/img/modelo.svg'

const InstitutionalPhilosophy = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="ContentTitleAccessibility" style={{ alignItems: 'Center', textAlign: 'center' }}>
              <span className="SpanAccessibility"><i className="fab fa-hornbill fa-2x"></i></span><h1 className="fw-4 TitleAccessibility">Nuestros Valores</h1>
            </div>
            <img src={imgValores} alt="ImgDescription" style={{ width: '500px', marginTop: '15px' }} />

          </div>

          <div className="col-xl-6">
            <div className="ContentTitleAccessibility" style={{ alignItems: 'Center', textAlign: 'center' }}>
              <span className="SpanAccessibility"><i className="fab fa-hornbill fa-2x"></i></span><h1 className="fw-4 TitleAccessibility">Modelo Pedagógico</h1>
            </div>
            <img src={imgModelo} alt="ImgDescription" style={{ width: '500px', marginTop: '5px' }} />
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default InstitutionalPhilosophy