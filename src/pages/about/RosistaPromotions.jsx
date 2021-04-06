import React from 'react'
import imgPromotion from './../../assets/img/promotion.jpg'

const RosistaPromotions = () => {
  return (
    <div className="container" style={{ paddingTop: '100px' }} >
      <img src={imgPromotion} alt="ImgDescription" style={{ objectFit: 'contain', width: '100%' }} />
    </div>
  )
}

export default RosistaPromotions