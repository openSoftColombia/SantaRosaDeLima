import React from 'react'
import imgVision from './../../assets/img/vision.svg'
import imgMision from './../../assets/img/mision.svg'

const VisionMission = () => {

  return (
    <React.Fragment>
      <div className="container ContentTitleAccessibility" style={{ alignItems: 'Center', textAlign: 'center' }}>
        <span className="SpanAccessibility"><i className="fab fa-hornbill fa-2x"></i></span><h1 className="fw-4 TitleAccessibility">Misión</h1>
      </div>
      <div className="container">
        <img src={imgMision} alt="ImgDescription" className="ImgTitleDescription" />
      </div>
      <div className="container ContentTitleAccessibility" style={{ paddingTop: '0', alignItems: 'Center', textAlign: 'center' }}>
        <span className="SpanAccessibility"><i className="fab fa-hornbill fa-2x"></i></span><h1 className="fw-4 TitleAccessibility">Visión</h1>
      </div>
      <div className="container">
        <img src={imgVision} alt="ImgDescription" className="ImgTitleDescription" />
      </div>
    </React.Fragment>
  )
}

export default VisionMission