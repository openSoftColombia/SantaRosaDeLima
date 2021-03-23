import React from 'react';
import ButtonComponet from '../components/common/button/ButtonComponent';
import CardComponent from '../components/common/card/CardComponent';
import CarouselComponent from '../components/common/carousel/CarouselComponet';
import NewComponent from '../components/common/containerNews/New/NewComponent';
import SliderComponent from '../components/common/slider/SliderComponent';
import './Homeview.css';

import useFetch from './../hooks/useFetch'
import url from './../config/config'

import image from './../assets/img/image2.svg';
import image2 from './../assets/img/image3.svg';
import imge from './../assets/img/Banner1.png';

const HomeView = () => {
  const { data: dataNotice, loading, error } = useFetch(`${url}/notice`);

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
            <NewComponent notice={notic} />
          </div>
          <div className="col-xl-6">
            <h1 className="fw-3 TitleHome mb-4 mt-3">Nivel academico</h1>
            <hr className="lineHome" />
            {
              card.map((card, index) => {
                return <CardComponent key={index} {...card} />;
              })
            }
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

const notic = [
  {
    title: "openSoft",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut, maecenas consequat augue sem eros placerat id rhoncus risus, montes hendrerit porta molestie aliquam curabitur faucibus. Feugiat primis duis lectus odio euismod sem magna auctor curae purus, ullamcorper aenean sodales nascetur venenatis fermentum taciti phasellus mollis nisl semper, urna dis magnis ornare placerat class mi montes hendrerit.",
    createdAt: "2021-03-18",
    resources: [
      {
        src: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        src: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        src: "https://images.pexels.com/photos/1581012/pexels-photo-1581012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
    ]
  }, {
    title: "",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut, maecenas consequat augue sem eros placerat id rhoncus risus, montes hendrerit porta molestie aliquam curabitur faucibus. Feugiat primis duis lectus odio euismod sem magna auctor curae purus,.",
    createdAt: "2021-03-23",
    resources: [
      {
        src: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        src: "https://images.pexels.com/photos/1327335/pexels-photo-1327335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
    ]
  }, {
    title: "OPENSOFT COLOMBIA S.A.S",
    description: "",
    createdAt: "2021-03-20",
    resources: [
      {
        src: "https://images.pexels.com/photos/1421837/pexels-photo-1421837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
    ]
  }, {
    title: "¡IMPORTAN! OPENSOFT COLOMBIA S.A.S ",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut, maecenas consequat augue sem eros placerat id rhoncus risus, montes hendrerit porta molestie aliquam curabitur faucibus. Feugiat primis duis lectus odio euismod sem magna auctor curae purus, ullamcorper aenean sodales nascetur venenatis fermentum taciti phasellus mollis nisl semper, urna dis magnis ornare placerat class mi montes hendrerit.",
    createdAt: "2021-03-22"
  }, {
    title: "OPENSOFT COLOMBIA S.A.S",
    description: "",
    createdAt: "2021-03-23",
    resources: [
      {
        src: "https://images.pexels.com/photos/1581012/pexels-photo-1581012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
    ]
  },
]

const imgBanner = [
  {
    src: imge,
    title: '',
    description: ''
  }
];

const button = [{
  name: 'Aula virtual',
  icon: 'fad fa-video fa-lg',
  color: 'rgba(115, 175, 255)',
  margin: '0 5px 0 5px'
}, {
  name: 'Circulares',
  icon: 'fad fa-books-medical fa-lg',
  color: 'rgba(0, 85, 186)',
  margin: '0 5px 0 5px'
}, {
  name: 'Egresado Rosista',
  icon: 'fad fa-user-friends fa-lg',
  color: '#E1A42F',
  margin: '0 5px 0 5px'
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