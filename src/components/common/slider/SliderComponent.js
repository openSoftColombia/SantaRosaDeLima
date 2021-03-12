import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import Card from 'react-bootstrap/Card'
import './Slider.css'

const SliderComponent = ({ props }) => {
  const breakpoint = [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    }, {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    }
  ]
  return (
    <InfiniteCarousel breakpoints={breakpoint} showSides={true} sidesOpacity={.5} sideSize={.1} slidesToShow={4}
      scrollOnDevice={true} autoCycle={true} cycleInterval={3500}>
      { props.map(({ img, title, description }) => {
        return (
          <Card style={{ width: '18rem', height: '22rem' }}>
            <Card.Img className="imgSlider" variant="top" src={img} />
            <Card.Body>
              <Card.Title> {title} </Card.Title>
              <Card.Text style={{ maxWidth: '300px', height: '120px' }}> {description} </Card.Text>
            </Card.Body>
          </Card>
        )
      })
      }
    </InfiniteCarousel>
  );
}

export default SliderComponent;