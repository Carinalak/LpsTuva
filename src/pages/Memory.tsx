import React, { useState, useEffect, useCallback } from 'react';
import Back from '../assets/images/memory_cards/back.png';
import Bear from '../assets/images/memory_cards/bear.png';
import CatCan from '../assets/images/memory_cards/cat_can.png';
import CatPurple from '../assets/images/memory_cards/cat_purple.png';
import Cow from '../assets/images/memory_cards/cow.png';
import Monkey from '../assets/images/memory_cards/monkey.png';
import Sheep from '../assets/images/memory_cards/sheep.png';
import TigerPurple from '../assets/images/memory_cards/purpletiger.png';
import Snake from '../assets/images/memory_cards/snake.png';
import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { Button, ButtonWrapper } from '../components/styled/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1WhiteSecond } from '../components/styled/Fonts';
import { MemoryModal } from '../components/MemoryModal';
import { BackgroundOriginal, TitleDropdownWrapper } from '../components/styled/Wrappers';
import styled from 'styled-components';
import { SMUTSROSA, KRITVIT, FONT_PLAYPEN, KOLSVART, SOLGUL } from '../components/styled/Variables';


const DropdownSelect = styled.select`
  background-color: ${SMUTSROSA};
  color: ${KRITVIT};
  font-size: 1rem;
  font-family: ${FONT_PLAYPEN};
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-radius: 5px;
  width: 100px;
`;

const Option = styled.option `
  padding: 5px;
  cursor: pointer;
  color: ${KRITVIT};
  border-radius: 5px;

  &:hover {
    background-color: ${SOLGUL};
    color: ${KOLSVART};
  }
`;



const easyCards = [
  { id: 1, src: Bear, alt: 'Björn' },
  { id: 2, src: CatCan, alt: 'Katt med burk' },
  { id: 3, src: CatPurple, alt: 'Lila katt' },
  { id: 4, src: Cow, alt: 'Ko' },
  { id: 5, src: Monkey, alt: 'Apa' },
  { id: 6, src: Sheep, alt: 'Får' },
];

const hardCards = [
  ...easyCards,
  { id: 7, src: TigerPurple, alt: 'Tiger' },
  { id: 8, src: Snake, alt: 'Orm' },
];

type Card = {
  uuid: string;
  id: number;
  src: string;
  alt: string;
  matched?: boolean;
};

export const Memory: React.FC = () => {
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const getCards = useCallback(() => (difficulty === 'easy' ? easyCards : hardCards), [difficulty]);

  const shuffleCards = useCallback(() => {
    setIsResetting(true);
    setSelectedCards([]);
    setMatchedCards([]);
    setShowModal(false);

    setTimeout(() => {
      const selectedCards = getCards();
      const shuffled = [...selectedCards, ...selectedCards]
        .map((card) => ({
          ...card,
          uuid: Math.random().toString(36).substr(2, 9),
        }))
        .sort(() => Math.random() - 0.5);

      setShuffledCards(shuffled);
      setIsResetting(false);
    }, 500);
  }, [getCards]);

  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  const handleCardClick = (card: Card) => {
    if (selectedCards.length === 2 || selectedCards.some((c) => c.uuid === card.uuid)) return;
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
    if (matchedCards.length === getCards().length) {
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
  }, [matchedCards, getCards]);

  const navigate = useNavigate();

  // För att bilderna ska laddas fortare:
  useEffect(() => {
    const preloadImages = () => {
      const imagePaths = getCards().map((card) => card.src).concat(Back);
      imagePaths.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [getCards]);

  return (
    <BackgroundOriginal>
      <TitleDropdownWrapper>
        <div/>
      <H1WhiteSecond>Memoryspel</H1WhiteSecond>
        <DropdownSelect value={difficulty} onChange={(e) => setDifficulty(e.target.value as 'easy' | 'hard')}>
          <Option value="easy">Lätt</Option>
          <Option value="hard">Svår</Option>
        </DropdownSelect>
        </TitleDropdownWrapper>

      <MemoryStyle>
        {shuffledCards.map((card) => {
          const isFlipped = !isResetting && (selectedCards.includes(card) || matchedCards.includes(card.id));
          return (
            <MemoryCard
              key={card.uuid}
              className={`card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => !isResetting && handleCardClick(card)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <CardImage src={card.src} alt={card.alt} />
                </div>
                <div className="card-back">
                  <CardImage src={Back} />
                </div>
              </div>
            </MemoryCard>
          );
        })}
      </MemoryStyle>
      {showModal && (
        <MemoryModal>
          <p>Grattis, du hittade alla djur! Spela igen?</p>
          <ButtonWrapper>
            <Button onClick={shuffleCards}>Ja</Button>
            <Button onClick={() => { setShowModal(false); navigate('/pysselspel'); }}>Nej</Button>
          </ButtonWrapper>
        </MemoryModal>
      )}
    </BackgroundOriginal>
  );
};
