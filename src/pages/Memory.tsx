import React, { useState, useEffect } from 'react';
import Back from '../assets/images/memory_cards/back.png';
import Bear from '../assets/images/memory_cards/bear.png';
import CatCan from '../assets/images/memory_cards/cat_can.png';
import CatPurple from '../assets/images/memory_cards/cat_purple.png';
import Cow from '../assets/images/memory_cards/cow.png';
import Monkey from '../assets/images/memory_cards/monkey.png';
import Sheep from '../assets/images/memory_cards/sheep.png';
import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { Button, ButtonWrapper } from '../components/styled/Buttons';
import { CardModal } from '../components/CardModal';
import { useNavigate } from 'react-router-dom';
import { PawSpinnerBig } from '../components/PawSpinnerBig';


const cards = [
  { id: 1, src: Bear, alt: 'Björn' },
  { id: 2, src: CatCan, alt: 'Katt med burk' },
  { id: 3, src: CatPurple, alt: 'Lila katt' },
  { id: 4, src: Cow, alt: 'Ko' },
  { id: 5, src: Monkey, alt: 'Apa' },
  { id: 7, src: Sheep, alt: 'Får' },
];

type Card = {
  uuid: unknown;
  id: number;
  src: string;
  alt: string;
  matched?: boolean;
};

export const Memory: React.FC = () => {
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);

  const shuffleCards = () => {
    const shuffled = [...cards, ...cards]
      .map((card) => ({
        ...card,
        uuid: Math.random().toString(36).substr(2, 9), // Unik nyckel för varje kort
      }))
      .sort(() => Math.random() - 0.5); // Slumpa ordningen
    setShuffledCards(shuffled);
    setMatchedCards([]);
    setSelectedCards([]);
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
      }, 1000); // 1000ms = 1 sekund
    }
  }, [matchedCards]);

  const navigate = useNavigate();

  // För att bilderna ska laddas fortare:
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

  const [isLoading, setIsLoading] = useState(true);

  // Sätt en timeout för att visa spinnern om sidan laddar långsamt
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Sätt till false om det går långsamt
    }, 1000); // Sätt en fördröjning innan spinnern försvinner, t.ex. 1000ms

    return () => clearTimeout(timer); // Rensa timeout om komponenten tas bort
  }, []);

  // När alla bilder är inladdade, döljer vi spinnern
  useEffect(() => {
    if (shuffledCards.length > 0) {
      setIsLoading(false);
    }
  }, [shuffledCards]);

  return (
    <>
      {isLoading ? (
        <PawSpinnerBig /> // Visa spinnern om isLoading är true
      ) : (
        <MemoryStyle>
          {shuffledCards.map((card, index) => {
            const isFlipped = selectedCards.includes(card) || matchedCards.includes(card.id);
            return (
              <MemoryCard
                key={index}
                className={`card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardClick(card)}
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
      )}
      {showModal && (
        <CardModal>
          <p>Grattis du hittade alla djur! Spela igen?</p>
          <ButtonWrapper>
            <Button onClick={shuffleCards}>Ja</Button>
            <Button onClick={() => { setShowModal(false); navigate('/pysselspel'); }}>Nej</Button>
          </ButtonWrapper>
        </CardModal>
      )}
    </>
  );
};
