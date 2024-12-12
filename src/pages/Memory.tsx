import React, { useState, useEffect } from 'react';
import Back from '../assets/images/memory_cards/back.png';
import Bear from '../assets/images/memory_cards/bear.png';
import CatCan from '../assets/images/memory_cards/cat_can.png';
import CatPurple from '../assets/images/memory_cards/cat_purple.png';
import Cow from '../assets/images/memory_cards/cow.png';
/*import Monkey from '../assets/images/memory_cards/monkey.png';
import Rabbit from '../assets/images/memory_cards/rabbit.png';*/
import Sheep from '../assets/images/memory_cards/sheep.png';
import Snake from '../assets/images/memory_cards/snake.png';
import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';

const cards = [
  { id: 1, src: Bear, alt: 'Björn' },
  { id: 2, src: CatCan, alt: 'Katt med burk' },
  { id: 3, src: CatPurple, alt: 'Lila katt' },
  { id: 4, src: Cow, alt: 'Ko' },
  /*{ id: 5, src: Monkey, alt: 'Apa' },
  { id: 6, src: Rabbit, alt: 'Kanin' },*/
  { id: 7, src: Sheep, alt: 'Får' },
  { id: 8, src: Snake, alt: 'Orm' },
];

type Card = {
  id: number;
  src: string;
  alt: string;
  matched?: boolean;
};


export const Memory: React.FC = () => {
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  // Blandar och dubblar korten
  useEffect(() => {
    const shuffled = [...cards, ...cards]
      .map((card) => ({ ...card, uuid: Math.random() })) // Lägg till slumpmässiga nycklar
      .sort((a, b) => a.uuid - b.uuid);
    setShuffledCards(shuffled);
  }, []);

  const handleCardClick = (card: Card) => {
    if (selectedCards.length === 2) return; // Tillåt bara två val åt gången
    if (selectedCards.find((c) => c.id === card.id)) return; // Undvik dubbelklick på samma kort

    setSelectedCards((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;

      if (first.id === second.id) {
        setMatchedCards((prev) => [...prev, first.id]);
      }

      setTimeout(() => setSelectedCards([]), 1000); // Resetta val efter 1 sekund
    }
  }, [selectedCards]);

  return (
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
  );
};
