import React, { useState, useEffect } from 'react';
import ButtonComponet from '../components/common/button/ButtonComponent';
import CardComponent from '../components/common/card/CardComponent';
import CarouselComponent from '../components/common/carousel/CarouselComponet';
import NewComponent from '../components/common/containerNews/New/NewComponent';
import SliderComponent from '../components/common/slider/SliderComponent';
import './Homeview.css';

import useFetch from './../hooks/useFetch'
import url from './../config/config'

// informacion ficticia para mostrat sin la api
import { FireButton, FireCard } from './../constantFireBase';

const HomeView = () => {
  const { data: dataBanners } = useFetch(`${url}/banner`);

  return (
    <React.Fragment>
      {/* Banner  */}
      <div className="contentCarouselHome">
        <CarouselComponent images={dataBanners} />
      </div>
      {/* Botones */}
      <div className="contentButtonHome">
        {
          FireButton.map((state, index) => {
            return (
              <ButtonComponet key={index} {...state} />
            );
          })
        }
      </div>
      {/* Gallery bienestar */}
      <div className="container contenSliderHome">
        <h1 className="fw-3 TitleHome mb-4">Bienestar Estudiantil</h1>
        <SliderComponent type={'B'} />
      </div>
      {/* Noticias */}
      <div id="Notices" className="container mt-2 contentNew">
        <div className="row">
          <div className="col-xl-6">
            <h1 className="fw-3 TitleHome mb-4 mt-3">Anuncios</h1>
            <hr className="lineHome" />
            <NewComponent />
          </div>
          <div className="col-xl-6">
            <h1 className="fw-3 TitleHome mb-4 mt-3">Nivel académico</h1>
            <hr className="lineHome" />
            {
              FireCard.map((card, index) => {
                return <CardComponent key={index} {...card} />;
              })
            }
          </div>
        </div>
      </div>
      {/* galleria estudiantes y profesores  */}
      <div className="container contenSliderHome">
        <h1 className="fw-3 TitleHome mb-4">Galería</h1>
        <SliderComponent type={'G'} />
      </div>
    </React.Fragment>
  );
};

export default HomeView;