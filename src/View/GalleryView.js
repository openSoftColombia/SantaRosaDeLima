import React from 'react'
import GalleryLayout from './../components/common/gallery/GalleryLayout';
import './Gallery.css'

const GalleryView = () => {

  return (
    <div className="container">
      <div className="ContentTitleGallery">
        <span className="SpanGallery"><i class="far fa-images fa-2x"></i></span><h1 className="fw-3 TitleGallery">Galleria</h1>
      </div>
      <GalleryLayout />
    </div>
  )
}

export default GalleryView;