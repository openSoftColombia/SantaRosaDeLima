import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';


const CarouselComponent = ({ images, carousel, img }) => {
  return (
    <div>
      <Carousel slide={false}>
        {
          images?.map(({ src, title, description }, index) => {
            return (
              <Carousel.Item key={index} style={carousel}>
                <img className="d-block image" src={src} alt={title} style={img} />
                <Carousel.Caption>
                  <h2 className="fw-4 fz-3 title">{title}</h2>
                  <h3 className="fw-3 fz-2 mt-2 description">{description}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default CarouselComponent;