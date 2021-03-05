import React from 'react';
import ButtonComponet from '../components/common/button/ButtonComponent';
import CardComponent from '../components/common/card/CardComponent';
import CarouselComponent from '../components/common/carousel/CarouselComponet';
import NewComponent from '../components/common/containerNews/New/NewComponent';
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
    icon: 'fas fa-atlas fz-2'
  }, {
    name: 'Admisiones',
    icon: 'fas fa-users-cog fz-2'
  }, {
    name: 'Comentarios',
    icon: 'fas fa-comments fz-2'
  }, {
    name: 'Porque si',
    icon: 'fas fa-comments fz-2'
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

  return (
    <React.Fragment>
      <div className="container contentHome">
        <div className="row">
          {
            button.map((state, index) => {
              return (
                <div className="col mb-2 ml-2 mr-2 mt-4" key={index}>
                  <ButtonComponet {...state} />
                </div>
              )
            })
          }
        </div>
      </div>
      <CarouselComponent key={img.id} props={img} />
      <div className="container mt-4 contentNew">
        <div className="row">
          <div className="col-xl-6">
            <h1 className="fw-3 TitleHome mb-4">Anuncios</h1>
            <NewComponent />
          </div>
          <div className="col-xl-6">
            <h1 className="fw-3 TitleHome mb-4">Info</h1>
            {card.map((card) => {
              return <CardComponent {...card} />
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeView;