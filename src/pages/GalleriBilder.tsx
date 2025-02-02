import React, { useState } from 'react';
import { H1WhiteSecond } from '../components/styled/Fonts';
import { BackgroundOriginal, GalleryContainer, GalleryWrapper, GalleryWrapperInner, PaginationWrapper } from '../components/styled/Wrappers';
import { GalleryImage } from '../components/styled/Image';
import { useGalleryImages } from '../components/useGalleryImages';
import { ImageModal } from '../components/ImageModal';
import { ButtonArrowLeft, ButtonArrowRight } from '../components/styled/Buttons';
import { SortDropdown } from '../components/SortDropdown';
import styled from 'styled-components';
import { BREAKPOINT_TABLET } from '../components/styled/Variables';

export const MittGalleriWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; 
  margin-bottom: 1.5rem;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      gap: 4rem; 
      margin-bottom: 1.5rem;
  }
`;

export const GalleriBilder: React.FC = () => {
  const [sortBy, setSortBy] = useState("all");
  const { currentImages, currentPage, totalPages, handleNext, handlePrevious } = useGalleryImages(sortBy);

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
    <BackgroundOriginal>
      <GalleryContainer>
        <MittGalleriWrapper>
          <div />
          <H1WhiteSecond style={{ textAlign: "center" }}>Mitt Galleri</H1WhiteSecond>
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </MittGalleriWrapper>

        <GalleryWrapper>
          {currentImages.map((image, index) => (
            <GalleryWrapperInner key={index}>
              <GalleryImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onClick={() => openModal(image.src, image.alt)}
              />
            </GalleryWrapperInner>
          ))}
        </GalleryWrapper>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <ButtonArrowLeft onClick={handlePrevious} disabled={currentPage === 1} />
          <PaginationWrapper style={{ margin: '0 1rem' }}>
            Sida {currentPage} av {totalPages}
          </PaginationWrapper>
          <ButtonArrowRight onClick={handleNext} disabled={currentPage === totalPages} />
        </div>
      </GalleryContainer>

      {isModalOpen && (
        <ImageModal
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </BackgroundOriginal>
  );
};
