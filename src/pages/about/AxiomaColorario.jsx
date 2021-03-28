import React from 'react'
import imgVision from './../../assets/img/axioma.svg'
import imgMision from './../../assets/img/colario.svg'

const AxiomaColorario = () => {

  return (
    <React.Fragment>
      <div className="container ContentTitleAccessibility" style={{ alignItems: 'Center', textAlign: 'center' }}>
        <span className="SpanAccessibility"><i className="fab fa-hornbill fa-2x"></i></span><h1 className="fw-4 TitleAccessibility">Axioma</h1>
      </div>
      <div className="container">
        <img src={imgMision} alt="ImgDescription" className="ImgTitleDescription" />
      </div>
      <div className="container ContentTitleAccessibility" style={{ paddingTop: '0', alignItems: 'Center', textAlign: 'center' }}>
        <span className="SpanAccessibility"><i className="fab fa-hornbill fa-2x"></i></span><h1 className="fw-4 TitleAccessibility">Colario</h1>
      </div>
      <div className="container">
        <img src={imgVision} alt="ImgDescription" className="ImgTitleDescription" />
      </div>
    </React.Fragment>
  )
}

export default AxiomaColorario