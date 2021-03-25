import React from 'react'
import CarouselComponent from '../../carousel/CarouselComponet'
import LogoImg from './../../../../assets/img/logo.jpg';
import './News.css'

const NewsComponent = ({ title, description, createdAt, resources }) => {
  let date = prettyDate(createdAt);
  return (
    <div className="pageNews pb-2">
      <div className="contentNews">
        <img src={LogoImg} alt='Logo' className="imgNews" />
        <div className="mt-2">
          <h6 className="fw-5 ml-5 mb-0 mt-2">Colegio Santa Rosa De Lima</h6>
          <p className="fw-3">{date}</p>
        </div>
      </div>
      <div className="plrNews">
        <p className="fw-5 mb-0 text-justify">{title}</p>
        <p className="fw-3 text-justify">{description}</p>
      </div>
      <div>
        <CarouselComponent images={resources} carousel={carousel} img={iamgen} />
      </div>
    </div>
  )
}

export default NewsComponent;

const prettyDate = (time) => {
  var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
    diff = (((new Date()).getTime() - date.getTime()) / 1000),
    day_diff = Math.floor(diff / 86400);

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return;

  return day_diff == 0 && (diff < 60 && "just now" || diff < 120 && "1 minute ago" ||
    diff < 3600 && Math.floor(diff / 60) + " minutes ago" || diff < 7200 && "1 hour ago" ||
    diff < 86400 && Math.floor(diff / 3600) + " hours ago") || day_diff == 1 && "Yesterday" ||
    day_diff < 7 && day_diff + " days ago" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
}

const carousel = {
  width: '96%',
  margin: '0 2%',
  backgroundColor: 'rgba(140, 139, 139, 0.2)',
  borderRadius: '5px'
}

const iamgen = {
  height: '300px',
  margin: 'auto',
  objectFit: 'contain'
}