import React, { useState, useCallback } from "react";
import { useParams } from 'react-router-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './Gallery.css'



const ReactPhotoGallery = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/1450083/pexels-photo-1450083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6747987/pexels-photo-6747987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/7036453/pexels-photo-7036453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/6805803/pexels-photo-6805803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/2646852/pexels-photo-2646852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/6421606/pexels-photo-6421606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6711200/pexels-photo-6711200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6948598/pexels-photo-6948598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/3803594/pexels-photo-3803594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/5873905/pexels-photo-5873905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6711200/pexels-photo-6711200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/3540047/pexels-photo-3540047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/6203310/pexels-photo-6203310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/4915537/pexels-photo-4915537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6711200/pexels-photo-6711200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/4721998/pexels-photo-4721998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/5957548/pexels-photo-5957548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/4993027/pexels-photo-4993027.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/4817064/pexels-photo-4817064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6979349/pexels-photo-6979349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/4915537/pexels-photo-4915537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/6421606/pexels-photo-6421606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6979349/pexels-photo-6979349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/3540047/pexels-photo-3540047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/6985514/pexels-photo-6985514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6561353/pexels-photo-6561353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6208479/pexels-photo-6208479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 2,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/7016917/pexels-photo-7016917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 3,
      height: 4
    }, {
      src: 'https://images.pexels.com/photos/6051049/pexels-photo-6051049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      width: 4,
      height: 3
    }, {
      src: 'https://images.pexels.com/photos/6216314/pexels-photo-6216314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      width: 3,
      height: 4
    },
  ]
  const { title } = useParams();
  console.log(title);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={images} margin={5, 6} columns={columns} direction="column" onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

const columns = (containerWidth) => {
  let columns = 1;
  if (containerWidth >= 500) columns = 3;
  if (containerWidth >= 900) columns = 4;
  if (containerWidth >= 1300) columns = 5;
  return columns;
}

export default ReactPhotoGallery;