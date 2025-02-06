import React, { useState, useEffect, useCallback, useRef } from 'react';
import Back from '../assets/images/memory_cards/back.png';
import Bear from '../assets/images/memory_cards/bear.png';
import CatCan from '../assets/images/memory_cards/cat_can.png';
import CatPurple from '../assets/images/memory_cards/cat_purple.png';
import Cow from '../assets/images/memory_cards/cow.png';
import Monkey from '../assets/images/memory_cards/monkey.png';
import Sheep from '../assets/images/memory_cards/sheep.png';
import TigerPurple from '../assets/images/memory_cards/purpletiger.png';
import Snake from '../assets/images/memory_cards/snake.png';
import Bee from '../assets/images/memory_cards/bee.png';
import Oxe from '../assets/images/memory_cards/oxe.png';
import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { Button, ButtonWrapper } from '../components/styled/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1WhiteSecond } from '../components/styled/Fonts';
import { MemoryModal } from '../components/MemoryModal';
import { BackgroundOriginal, TitleToggleWrapper } from '../components/styled/Wrappers';
import { DifficultyToggle } from '../components/DifficultyToggle';
import { SoundPlayerHandle, SoundPlayer } from '../components/SoundPlayer';


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
  { id: 9, src: Bee, alt: 'Bi' },
  { id: 10, src: Oxe, alt: 'Oxe' },
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
  const soundRef = useRef<SoundPlayerHandle>(null);

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
    soundRef.current?.play("flip");
    setSelectedCards((prev) => [...prev, card]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (first.id === second.id) {
        setMatchedCards((prev) => [...prev, first.id]);
        soundRef.current?.play("match");
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (matchedCards.length === getCards().length) {
      setTimeout(() => {
        setShowModal(true);
        soundRef.current?.play("win");
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
      <SoundPlayer ref={soundRef} 
        winVolume={0.5}  // Sätt volymen för 'win' ljudet till 50%
        flipVolume={1.0}  // Behåll flip-ljudet på full volym
        matchVolume={0.8} // Sätt match-ljudet till 80% volym
        />
      <TitleToggleWrapper>
      <div className="difficulty-toggle">
    
    <DifficultyToggle
      difficulty={difficulty}
      onClick={() => setDifficulty(difficulty === "easy" ? "hard" : "easy")}
    />
   
  </div>
      <H1WhiteSecond>Memoryspel</H1WhiteSecond>
       <div/>
        </TitleToggleWrapper>

        <MemoryStyle className={difficulty === "hard" ? "hard-mode" : ""}>

        {shuffledCards.map((card) => {
          const isFlipped = !isResetting && (selectedCards.includes(card) || matchedCards.includes(card.id));
          return (
            <MemoryCard
            key={card.uuid}
            className={`card ${isFlipped ? 'flipped' : ''} ${difficulty === "hard" ? "hard-mode" : ""}`}
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
