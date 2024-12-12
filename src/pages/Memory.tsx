import React, { useState, useEffect } from 'react';
import Back from '../assets/images/memory_cards/back.png';
import Bear from '../assets/images/memory_cards/bear.png';
import CatCan from '../assets/images/memory_cards/cat_can.png';
import CatPurple from '../assets/images/memory_cards/cat_purple.png';
import Cow from '../assets/images/memory_cards/cow.png';
import Monkey from '../assets/images/memory_cards/monkey.png';
import Rabbit from '../assets/images/memory_cards/rabbit.png';
/*import Sheep from '../assets/images/memory_cards/sheep.png';
import Snake from '../assets/images/memory_cards/snake.png';*/

import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { Button } from '../components/styled/Buttons';
import { CardModal } from '../components/CardModal';
import { useNavigate } from 'react-router-dom';


const cards = [
  { id: 1, src: Bear, alt: 'Björn' },
  { id: 2, src: CatCan, alt: 'Katt med burk' },
  { id: 3, src: CatPurple, alt: 'Lila katt' },
  { id: 4, src: Cow, alt: 'Ko' },
  { id: 5, src: Monkey, alt: 'Apa' },
  { id: 6, src: Rabbit, alt: 'Kanin' },
  /*{ id: 7, src: Sheep, alt: 'Får' },
  { id: 8, src: Snake, alt: 'Orm' },*/
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
      setShowModal(true);
    }
  }, [matchedCards]);

  const navigate = useNavigate();


  return (
    <>
      <MemoryStyle>
        {shuffledCards.map((card, index) => (
          <MemoryCard
            key={index}
            className={`card ${matchedCards.includes(card.id) ? 'matched' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            {selectedCards.includes(card) || matchedCards.includes(card.id) ? (
              <CardImage src={card.src} alt={card.alt} />
            ) : (
              <CardImage src={Back} alt="Baksida" />
            )}
          </MemoryCard>
        ))}
      </MemoryStyle>
      {showModal && (
        <CardModal>
          <p>Grattis du hittade alla djur! Spela igen?</p>
          <Button onClick={shuffleCards}>Ja</Button>
          <Button onClick={() =>  { setShowModal(false); navigate('/pysselspel'); }}>Nej</Button>
        </CardModal>
      )}
    </>
  );
};