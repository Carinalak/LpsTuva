import React, { useState, useEffect, useCallback, useRef } from 'react';
import Back from '../assets/images/memory_cards/memory_jul/back.png';
import Pig from '../assets/images/memory_cards/memory_jul/pig.png';
import IceBear from '../assets/images/memory_cards/memory_jul/icebear.png';
import Penguin from '../assets/images/memory_cards/memory_jul/penguin.png';
import Sheep from '../assets/images/memory_cards/sheep.png';
import Snake from '../assets/images/memory_cards/snake.png';
import Bear from '../assets/images/memory_cards/bear.png';

import SpindelNat from '../assets/images/memory_cards//memory_halloween/spindel_nat.jpg';
import LilaMus from '../assets/images/memory_cards/memory_halloween/lila_mus.jpg';
import OrmLov from '../assets/images/memory_cards/memory_halloween/orm_lov.jpg';
import PumpaMossa from '../assets/images/memory_cards/memory_halloween/pumpamossa.jpg';

import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { ButtonWrapper, JulButton } from '../components/styled/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1WhiteSecond } from '../components/styled/Fonts';
import { JulMemoryModal } from '../components/MemoryModal';
import { JulBackground, TitleToggleWrapper } from '../components/styled/Wrappers';
import SnowFall  from '../components/SnowFall';
import { SoundPlayerHandle, SoundPlayer } from '../components/SoundPlayer';
import { DifficultyToggleJul } from '../components/DifficultyToggleJul';


const easyCards = [
  { id: 1, src: Pig, alt: 'Gris' },
  { id: 2, src: IceBear, alt: 'Björn' },
  { id: 3, src: Penguin, alt: 'Pingvin' },
  { id: 4, src: Sheep, alt: 'Får' },
  { id: 5, src: Snake, alt: 'Orm' },
  { id: 6, src: Bear, alt: 'Björn' },

];

const hardCards = [
  ...easyCards,
  { id: 7, src: SpindelNat, alt: 'Blå spindel' },
  { id: 8, src: LilaMus, alt: 'En lila mus' },
  { id: 9, src: OrmLov, alt: 'Orm med gult löv' },
  { id: 10, src: PumpaMossa, alt: 'En vit petshop i en pumpamössa' },
  //{ id: 10, src: BunnyLeaf, alt: 'En kanin bredvid ett rött löv.' },
  //{ id: 12, src: LpsGodisar, alt: 'Petshopar på godis' },

];

type Card = {
  uuid: string;
  id: number;
  src: string;
  alt: string;
  matched?: boolean;
};


export const Julmemory: React.FC = () => {
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
    <JulBackground>
            <SoundPlayer ref={soundRef} 
                winVolume={0.5}  // Sätt volymen för 'win' ljudet till 50%
                flipVolume={1.0}  // Behåll flip-ljudet på full volym
                matchVolume={0.8} // Sätt match-ljudet till 80% volym
                />
                <TitleToggleWrapper>
                  <div/>
                  <H1WhiteSecond>Julmemory</H1WhiteSecond>
                  <div>
                  <DifficultyToggleJul
                    difficulty={difficulty}
                    onClick={() => setDifficulty(difficulty === "easy" ? "hard" : "easy")}
                  />
                  </div>
                </TitleToggleWrapper>
      
     <MemoryStyle className={difficulty === "hard" ? "hard-mode" : ""}>
        {shuffledCards.map((card) => {
          const isFlipped = !isResetting && (selectedCards.includes(card) || matchedCards.includes(card.id));
        
          return (
            <MemoryCard
              key={card.uuid}
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
