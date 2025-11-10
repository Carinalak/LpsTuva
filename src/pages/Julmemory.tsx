import React, { useState, useEffect, useCallback, useRef } from 'react';
import Back from '../assets/images/memory_cards/memory_jul/back.png';
//import Pig from '../assets/images/memory_cards/memory_jul/pig300.png';
import IceBear from '../assets/images/memory_cards/memory_jul/icebear300.png';
//import Penguin from '../assets/images/memory_cards/memory_jul/penguin300.png';
import HundarKalke from '../assets/images/memory_cards/memory_jul/hundar_kalke300.png';
import IsBjorn from '../assets/images/memory_cards/memory_jul/isbjorn300.png';
import KaninPulka from '../assets/images/memory_cards/memory_jul/kanin_pulka300.png';

import KattSnoHog from '../assets/images/memory_cards/memory_jul/katt_snohog300.png';
import LilaKanin from '../assets/images/memory_cards/memory_jul/lila_kanin300.png';
import NalleMossa from '../assets/images/memory_cards/memory_jul/nalle_mossa300.png';
import Fox from '../assets/images/memory_cards/memory_jul/rav300.png';
import Seal from '../assets/images/memory_cards/memory_jul/sal300.png';
import Valross from '../assets/images/memory_cards/memory_jul/valross300.png';

import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { ButtonWrapper, JulButton } from '../components/styled/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1WhiteSecond } from '../components/styled/Fonts';
import { JulMemoryModal } from '../components/MemoryModal';
import { JulBackground, TitleToggleWrapper } from '../components/styled/Wrappers';
import SnowFall  from '../components/SnowFall';
import { SoundPlayerJul, SoundPlayerJulHandle } from '../components/SoundPlayerJul';
import { DifficultyToggleJul } from '../components/DifficultyToggleJul';


const easyCards = [
  { id: 1, src: Fox, alt: 'Räv' },
  { id: 2, src: IceBear, alt: 'Isbjörn' },
  { id: 3, src: Seal, alt: 'Säl' },
  { id: 4, src: HundarKalke, alt: 'Hundar åker kälke' },
  { id: 5, src: IsBjorn, alt: 'Isbjörn' },
  { id: 6, src: KaninPulka, alt: 'Kanin på pulka' },
];

const hardCards = [
  ...easyCards,
  { id: 7, src: KattSnoHog, alt: 'Katt vid snöhög' },
  { id: 8, src: LilaKanin, alt: 'Lila kanin' },
  { id: 9, src: NalleMossa, alt: 'Nalle med lila mössa' },
  { id: 10, src: Valross, alt: 'Valross' },

  //{ id: 3, src: Penguin, alt: 'Pingvin' },
  //{ id: 1, src: Pig, alt: 'Gris' },

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
  const soundRef = useRef<SoundPlayerJulHandle>(null);

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
            <SoundPlayerJul ref={soundRef} 
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
              className={`card ${isFlipped ? 'flipped' : ''} ${difficulty === "hard" ? "hard-mode" : ""}`}
              onClick={() => !isResetting && handleCardClick(card)}
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
