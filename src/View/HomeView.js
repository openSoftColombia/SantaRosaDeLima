import React from 'react';
import ButtonComponet from '../components/common/button/ButtonComponent';
import CardComponent from '../components/common/card/CardComponent';
import CarouselComponent from '../components/common/carousel/CarouselComponet';
import NewComponent from '../components/common/containerNews/New/NewComponent';
import SliderComponent from '../components/common/slider/SliderComponent'
import './Homeview.css'

import image from './../assets/img/image2.svg'
import image2 from './../assets/img/image3.svg'

const HomeView = (props) => {

  const img = [{
    src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Primera ImagenEste colegio imlemento becas solidarias',
    description: 'Esta es la primera imagen we'
  }, {
    src: 'https://images.pexels.com/photos/4866043/pexels-photo-4866043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Segunda Imagen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut facilisis orci. Etiam ut purus hendrerit, dapibus velit quis, suscipit justo.'
  }, {
    src: 'https://images.pexels.com/photos/5088180/pexels-photo-5088180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: '',
    description: ''
  }]

  const button = [{
    name: 'Aula virtual',
    icon: 'fas fa-atlas fa-sm'
  }, {
    name: 'Admisiones',
    icon: 'fas fa-users-cog fa-sm'
  }, {
    name: 'Comentarios',
    icon: 'fas fa-comments fa-sm'
  }, {
    name: 'Porque si',
    icon: 'fas fa-comments fa-sm'
  }]

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
  }]

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
  }]

  return (
    <React.Fragment>
      <div className="contentCarouselHome">
        <CarouselComponent key={img.id} props={img} />
      </div>
      <div className="contentHome">
        <div className="row">
          {
            button.map((state, index) => {
              return (
                <div className="col-md mt-5 mb-4" key={index}>
                  <ButtonComponet key={index} {...state} />
                </div>
              )
            })
          }
        </div>
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
              return <CardComponent key={index} {...card} />
            })}
          </div>
        </div>
      </div>
      <div className="container contenSliderHome">
        <h1 className="fw-3 TitleHome mb-4">Galeria</h1>
        <SliderComponent props={slider} />
      </div>
    </React.Fragment>
  )
}

export default HomeView;