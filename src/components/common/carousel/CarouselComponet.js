import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'


const CarouselComponent = ({ props, carousel, img }) => {
  return (
    <div className="">
      <Carousel slide={false}>
        {
          props?.map(({ src, title, description }, index) => {
            return (
              <Carousel.Item key={index} style={carousel}>
                <img className="d-block w-100 image" src={src} alt={title} style={img} />
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