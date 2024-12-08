import React, { useState } from 'react';
import { H1PurpleSecond } from '../components/styled/Title';
import { GalleryContainer, GalleryWrapper, GalleryWrapperInner } from '../components/styled/Wrappers';
import { GalleryImage } from '../components/styled/Image';
import { useGalleryImages } from '../components/useGalleryImages';
import { ImageModal } from '../components/ImageModal';
import { Button } from '../components/styled/Buttons';



export const GalleriBilder: React.FC = () => {
  const { currentImages, currentPage, totalPages, handleNext, handlePrevious } = useGalleryImages();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryContainer>
        <H1PurpleSecond>Mitt Galleri</H1PurpleSecond>
        <GalleryWrapper>
          {currentImages.map((image, index) => (
            <GalleryWrapperInner key={index}>
              <GalleryImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onClick={() => openModal(image.src, image.alt)} // Öppna modal vid klick
              />
            </GalleryWrapperInner>
          ))}
        </GalleryWrapper>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Button onClick={handlePrevious} disabled={currentPage === 1}>
            Föregående
          </Button>
          <span style={{ margin: '0 1rem' }}>
            Sida {currentPage} av {totalPages}
          </span>
          <Button onClick={handleNext} disabled={currentPage === totalPages}>
            Nästa
          </Button>
        </div>
      </GalleryContainer>
      {/* Visa modal om den är öppen */}
      {isModalOpen && (
        <ImageModal
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </>
  );
};