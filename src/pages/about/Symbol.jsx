import React from 'react'
import imgEscudo from './../../assets/img/escudo.svg'
import imgBandera from './../../assets/img/bandera.jpg'
import imgArbol from './../../assets/img/arbol.png'

const Symbol = () => {
  return (
    <div className='container' style={{ paddingTop: '6em' }}>
      <h1 className='fw-5 fs-1'>Heráldica</h1>
      <p className='fw-4 fs-6 mb-0'>
        En la Bandera y el Escudo de nuestra Casa de estudios <span className='fw-5'>¨Colegio Santa Rosa de Lima¨</span> se han utilizado tres colores:
      </p>
      <p className='fw-4 fs-6 text-center mb-1'>
        BLANCO - AMARILLO - AZÚL
      </p>
      <p className='fw-4 fs-6'>
        El color blanco significa para nuestra institución: integridad, obediencia, firmeza, sinceridad, pureza, vigilancia, elocuencia, vivencia, virtudes y cualidades; éstas que debemos practicar en nuestra vida cotidiana. El color azul simboliza la justicia, celos, lealtad, majestad, y serenidad que han de identificar al alumno Rosista en cualquier parte donde le corresponda desempeñar su rol y status social. El color amarillo simboliza el astro rey: el sol y como él irradiando luces, apartando las tinieblas, la oscuridad para llegar a la feliz culminación de la meta trazada, ostentando con orgullo nuestro lema: "CIENCIA Y TRABAJO". El color amarillo también representa la nobleza, riqueza, poder, luz y sabiduría.
      </p>

      <div className="row">
        <div className="col-xl">
          <img src={imgEscudo} alt="ImgDescription" className="ImgTitleDescription" style={{ objectFit: 'contain', margin: 0, height: '21em' }} />
        </div>
        <div className="col-xl">
          <img src={imgBandera} alt="ImgDescription" className="ImgTitleDescription" style={{ objectFit: 'contain', margin: '0' }} />
        </div>
      </div>

      <p className='fw-4 fs-6'>
        En nuestro Árbol la raíz y el sustento simbolizan la investigación. El tronco
        representa la firmeza y el orgullo. Y las hojas verdes y frondosas significan
        todos los aprendizajes adquiridos en el colegio.
        Busca y selecciona dentro del árbol del conocimiento el itinerario para tu
        interés como estudiante, como profesor o como investigador, porque el mejor
        camino al futuro es el aprendizaje
      </p>

      <img src={imgArbol} alt="ImgDescription" className="ImgTitleDescription" style={{ objectFit: 'contain', margin: '0', height: '21em' }} />
    </div>
  )
}
export default Symbol