import React from 'react';
import './Gallery.css'

const GalleryComponent = ({ size, img }) => {
  return (
    <div style={{ ...styles.card, ...styles[size] }}>
      <img src={img} className="imgGallery" />
    </div>
  )
}

const styles = {
  card: {
    margin: '5px 6px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: '#7CD1B5'
  },
  small: {
    gridRowEnd: 'span 26'
  },
  medium: {
    gridRowEnd: 'span 33'
  },
  large: {
    gridRowEnd: 'span 45'
  }
}

export default GalleryComponent;