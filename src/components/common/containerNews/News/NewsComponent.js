import React from 'react'
import CarouselComponent from '../../carousel/CarouselComponet'
import './News.css'

const NewsComponent = ({ description, publications, img }) => {
  const carousel = {
    width: '96%',
    margin: '0 2%'
  }

  const iamgen = {
    height: '300px'
  }

  return (
    <div className="pageNews pb-2">
      <div className="contentNews">
        <img src="https://wipy.tv/wp-content/uploads/2019/10/Nueva-imagen-de-Avatar-2.jpg" className="imgNews" />
        <h6 className="fw-5 ml-5">Santa Rosa De Lima</h6>
      </div>
      <div className="plrNews">
        <p className="fw-3">
          {publications}
        </p>
      </div>
      <div>
        <CarouselComponent props={img} carousel={carousel} img={iamgen} />
      </div>
    </div>
  )
}

export default NewsComponent;