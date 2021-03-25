import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Slider.css'

import Slider from "react-slick";

import axios from 'axios'
import url from './../../../config/config'

const SliderComponent = ({ type }) => {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    getGalleryTypeB()
  }, [])

  const getGalleryTypeB = async () => {
    const { data } = await axios.get(`${url}/gallery/type/${type}`)
    setGallery(data)
  }

  return (
    <React.Fragment>
      {/* Requerid css of slider */}
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Slider {...settings}>
        {gallery.map(({ id, title, description, resources }) => {
          return (
            <Card key={id} style={{ width: '18rem', height: '22rem' }}>
              <Card.Img className="imgSlider" alt='card' variant="top" src={resources[0].src} />
              <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text style={{ maxWidth: '300px', height: '90px', textOverflow: 'ellipsis', whiteSpace: 'inherit', overflow: 'hidden' }}> {description} </Card.Text>
                <Link to={`/Gallery/${id}`} rel="noopener noreferrer" target="_blank">Ver mas</Link>
              </Card.Body>
            </Card>
          )
        })
        }
      </Slider>
    </React.Fragment>
  );
}
export default SliderComponent;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};