import React from 'react';
import fondoImg from './../../../assets/img/image.svg'
import './card.css';

const CardComponent = ({ title, description, img, leftColor, rightColor }) => (
  <div className="card mx-auto card-Card" style={{
    backgroundImage: `url(),
    linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor || '#2F80ED'}) `
  }}>
    <div className="card-body">
      <div className="row center">
        <div className="col-6">
          <img src={img || fondoImg} className="float-right" alt="exercise" />
        </div>
        <div className="col-6 card-Card-Info">
          <h1 className="fw-7" >{title}</h1>
          <p className="fw-3">{description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default CardComponent;
