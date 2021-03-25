import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import url from './../config/config'
import axios from 'axios'
import ReactPReactPhotoGallery from './../components/common/gallery/ReactPhotoGallery';
import LoadingComponent from './../components/common/loading/LoadingComponent'
import getRandomInt from './../helpers/getRandomInt'
import './Gallery.css'

const GalleryView = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState([]);
  const [imageGallery, setImageGallery] = useState([]);

  useEffect(() => {
    const getGalleryById = async () => {
      const { data } = await axios.get(`${url}/gallery/${id}`)
      setGallery(data)
      const imageMap = data.resources.map(resource => {
        return {
          src: resource.src,
          width: getRandomInt(3, 5),
          height: getRandomInt(3, 5)
        }
      })
      setImageGallery(imageMap)
    }
    getGalleryById()
  }, [])

  return (
    <div className="container" >
      {gallery ?
        <>
          <div className="ContentTitleGallery">
            <span className="SpanGallery"><i className="far fa-images fa-2x"></i></span><h1 className="fw-3 TitleGallery">Galleria</h1>
          </div>
          <h1 className="fw-4 DescriptionGallery">{gallery.title}</h1>
          <p>{gallery.description}</p>
          {imageGallery.length > 0 ? <ReactPReactPhotoGallery images={imageGallery} /> : <LoadingComponent />}
        </>
        :
        <LoadingComponent />
      }

    </ div >
  )

}

export default GalleryView;