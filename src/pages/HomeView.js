import React from 'react';
import ButtonComponet from '../components/common/button/ButtonComponent';
import CardComponent from '../components/common/card/CardComponent';
import CarouselComponent from '../components/common/carousel/CarouselComponet';
import NewComponent from '../components/common/containerNews/New/NewComponent';
import SliderComponent from '../components/common/slider/SliderComponent';
import './Homeview.css';

import image from './../assets/img/image2.svg';
import image2 from './../assets/img/image3.svg';
import prueba from './../assets/img/prueba.jpg';
import prueba2 from './../assets/img/prueba2.jpg';
import prueba3 from './../assets/img/prueba3.jpg';
import imge from './../assets/img/Baners.jpg';
import img2 from './../assets/img/Baners 2.jpg';
import img3 from './../assets/img/Baners3.jpg';

const HomeView = (props) => {

  const imgBanner = [
    {
      src: prueba,
      title: 'Primera ImagenEste colegio imlemento becas solidarias',
      description: 'Esta es la primera imagen we'
    }, {
      src: prueba2,
      title: 'Primera ImagenEste colegio imlemento becas solidarias',
      description: 'Esta es la primera imagen we'
    }, {
      src: prueba3,
      title: 'Segunda Imagen',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut facilisis orci. Etiam ut purus hendrerit, dapibus velit quis, suscipit justo.'
    }, {
      src: imge,
      title: '',
      description: ''
    }, {
      src: img2,
      title: '',
      description: ''
    }, {
      src: img3,
      title: '',
      description: ''
    }
  ];

  const button = [{
    name: 'Aula virtual',
    icon: 'fad fa-video fa-sm',
    color: 'rgba(115, 175, 255, 0.75)'
  }, {
    name: 'Circulares',
    icon: 'fad fa-books-medical fa-sm',
    color: 'rgba(0, 85, 186, 0.75)'
  }, {
    name: 'Egresado Rosista',
    icon: 'fad fa-user-friends fa-sm',
    color: 'rgba(47, 128, 237, 0.75)'
  }];

  const card = [{
    title: 'PreEscolar',
    description: '“El juego es un lenguaje natural, porque es precisamente en esos momentos lúdicos donde la niña y el niño sienten mayor necesidad de expresar al otro sus intenciones, sus deseos, sus emociones y sus sentimientos”.',
    img: image2,
    leftColor: '',
    rightColor: ''
  }, {
    title: 'Primaria',
    description: '“Él los mira compasivo, y cuida de ellos, como quien es su protector, su apoyo y su padre; pero se descarga en vosotros de este cuidado”.',
    img: '',
    leftColor: '',
    rightColor: ''
  }, {
    title: 'Secundaria',
    description: '“El servicio de la educación se vive desde el compromiso de una comunidad cuyos miembros se asocian para asegurar la estabilidad y el futuro de la escuela”.',
    img: image,
    leftColor: '',
    rightColor: ''
  }];

  const slider = [{
    img: 'https://images.pexels.com/photos/2567958/pexels-photo-2567958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/2576787/pexels-photo-2576787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/5994354/pexels-photo-5994354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/6948641/pexels-photo-6948641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/6141276/pexels-photo-6141276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/2567958/pexels-photo-2567958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/5766435/pexels-photo-5766435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/709854/pexels-photo-709854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/1790393/pexels-photo-1790393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }, {
    img: 'https://images.pexels.com/photos/4328755/pexels-photo-4328755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'PreEscolar',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  }];

  return (
    <React.Fragment>
      <div className="contentCarouselHome">
        <CarouselComponent key={imgBanner.id} images={imgBanner} />
      </div>

      <div className="contentButtonHome">
        {
          button.map((state, index) => {
            return (
              <ButtonComponet key={index} {...state} />
            );
          })
        }
      </div>

      <div className="container contenSliderHome">
        <h1 className="fw-3 TitleHome mb-4">Bienestar Estudiantil</h1>
        <SliderComponent props={slider} />
      </div>
      <div id="Notices" className="container mt-2 contentNew">
        <div className="row">
          <div className="col-xl-6">
            <h1 className="fw-3 TitleHome mb-4 mt-3">Anuncios</h1>
            <hr className="lineHome" />
            <NewComponent />
          </div>
          <div className="col-xl-6">
            <h1 className="fw-3 TitleHome mb-4 mt-3">Nivel academico</h1>
            <hr className="lineHome" />
            {card.map((card, index) => {
              return <CardComponent key={index} {...card} />;
            })}
          </div>
        </div>
      </div>

      <div className="container contenSliderHome">
        <h1 className="fw-3 TitleHome mb-4">Galeria</h1>
        <SliderComponent props={slider} />
      </div>
    </React.Fragment>
  );
};

export default HomeView;