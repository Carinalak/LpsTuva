import React, { useState, useEffect } from 'react';
import Back from '../assets/images/memory_cards/memory_jul/back.png';
import Pig from '../assets/images/memory_cards/memory_jul/pig.png';
import IceBear from '../assets/images/memory_cards/memory_jul/icebear.png';
import Penguin from '../assets/images/memory_cards/memory_jul/penguin.png';
import Sheep from '../assets/images/memory_cards/sheep.png';
import Snake from '../assets/images/memory_cards/snake.png';
import Bear from '../assets/images/memory_cards/bear.png';

import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { ButtonWrapper, JulButton } from '../components/styled/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1WhiteSecond } from '../components/styled/Fonts';
import { JulMemoryModal } from '../components/MemoryModal';
import { JulBackground } from '../components/styled/Wrappers';
import SnowFall  from '../components/SnowFall';


const cards = [
  { id: 1, src: Pig, alt: 'Gris' },
  { id: 2, src: IceBear, alt: 'Björn' },
  { id: 3, src: Penguin, alt: 'Pingvin' },
  { id: 4, src: Sheep, alt: 'Får' },
  { id: 5, src: Snake, alt: 'Orm' },
  { id: 6, src: Bear, alt: 'Björn' },
];

type Card = {
  uuid: unknown;
  id: number;
  src: string;
  alt: string;
  matched?: boolean;
};

export const Julmemory: React.FC = () => {
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const shuffleCards = () => {
    setIsResetting(true);
    setSelectedCards([]);
    setMatchedCards([]);

    setTimeout(() => {
      const shuffled = [...cards, ...cards]
        .map((card) => ({
          ...card,
          uuid: Math.random().toString(36).substr(2, 9), // Unik nyckel för varje kort
        }))
        .sort(() => Math.random() - 0.5);

      setShuffledCards(shuffled);
      setIsResetting(false);
    }, 500);

    setShowModal(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (card: Card) => {
    if (selectedCards.length === 2 || selectedCards.find((c) => c.uuid === card.uuid)) return;
    setSelectedCards((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (first.id === second.id) {
        setMatchedCards((prev) => [...prev, first.id]);
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
  }, [matchedCards]);

  const navigate = useNavigate();

  useEffect(() => {
    const preloadImages = () => {
      const imagePaths = cards.map((card) => card.src).concat(Back); // Lägg till både framsidor och baksida
      imagePaths.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);

  return (
    <JulBackground>
      <H1WhiteSecond>Julmemory</H1WhiteSecond>
      <MemoryStyle>
        {shuffledCards.map((card, index) => {
          const isFlipped =
            !isResetting && (selectedCards.includes(card) || matchedCards.includes(card.id));
          return (
            <MemoryCard
              key={index}
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => !isResetting && handleCardClick(card)} // Hindra klick under reset
            >
              <div className="card-inner">
                {/* Framsidan: Djurets bild */}
                <div className="card-front">
                  <CardImage src={card.src} alt={card.alt} />
                </div>
                {/* Baksidan: Standard baksida */}
                <div className="card-back">
                  <CardImage src={Back} />
                </div>
              </div>
            </MemoryCard>
          );
        })}
      </MemoryStyle>
      {showModal && (
        <>
          <SnowFall count={50} /> {/* Använd SnowFall-komponenten */}
          <JulMemoryModal>
            <p>Grattis du hittade alla djur! Spela igen?</p>
            <ButtonWrapper>
              <JulButton onClick={shuffleCards}>Ja</JulButton>
              <JulButton onClick={() => { setShowModal(false); navigate('/pysselspel'); }}>Nej</JulButton>
            </ButtonWrapper>
          </JulMemoryModal>
        </>
      )}
    </JulBackground>
  );
};
