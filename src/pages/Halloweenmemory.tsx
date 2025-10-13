import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SoundPlayerHalloween, SoundPlayerHalloweenHandle } from '../components/SoundPlayerHalloween';
import Ghost1 from '../assets/images/memory_cards/memory_halloween/ghost1.png';
import Ghost2 from '../assets/images/memory_cards/memory_halloween/ghost2.png';
import Back from '../assets/images/memory_cards/memory_halloween/back_halloween.png';
//import BunnyLeaf from '../assets/images/memory_cards/memory_halloween/bunnyleaf.jpg';
import FladdermusHangs from '../assets/images/memory_cards/memory_halloween/fladdermushangs.jpg';
import FladdermusPumpa from '../assets/images/memory_cards/memory_halloween/fladdermuspumpa.jpg';
import SpindlarPumpa from '../assets/images/memory_cards/memory_halloween/spindlar_pumpa.jpg';
import PumpaBrillor from '../assets/images/memory_cards/memory_halloween/pumpabrillor.jpg';


import IgelkotteLov from '../assets/images/memory_cards/memory_halloween/igelkottelov.jpg';
import PumpaMossa from '../assets/images/memory_cards/memory_halloween/pumpamossa.jpg';
import SpindelNat from '../assets/images/memory_cards//memory_halloween/spindel_nat.jpg';
import SpindelGul from '../assets/images/memory_cards//memory_halloween/spindel_gul.jpg';
//import LpsGodisar from '../assets/images/memory_cards//memory_halloween/lpsgodisar.jpg';
import LilaMus from '../assets/images/memory_cards/memory_halloween/lila_mus.jpg';
import OrmLov from '../assets/images/memory_cards/memory_halloween/orm_lov.jpg';

import { CardImage, MemoryCard, MemoryStyle } from '../components/styled/MemoryStyle';
import { ButtonWrapper, HalloweenButton } from '../components/styled/Buttons';
import { useNavigate } from 'react-router-dom';
import { H1HalloweenSecond } from '../components/styled/Fonts';
import { HalloweenMemoryModal } from '../components/MemoryModal';
import { HalloweenBackground, TitleToggleWrapper } from '../components/styled/Wrappers';
import { DifficultyToggleHalloween } from '../components/DifficultyToggleHalloween';
import SnowFallOrange from '../components/SnowFallOrange';
import styled, { keyframes } from 'styled-components';
import { BREAKPOINT_DESKTOP, BREAKPOINT_BIGGER_DESKTOP } from '../components/styled/Variables';


const easyCards = [
  { id: 1, src: SpindelGul, alt: 'Gul spindel' },
  { id: 2, src: FladdermusHangs, alt: 'En hängande fladdermus' },
  { id: 3, src: FladdermusPumpa, alt: 'Fladdermus bredvid en pumpalykta' },
  { id: 4, src: SpindlarPumpa, alt: 'Spindlar kryper på en pumpa' },
  { id: 5, src: PumpaBrillor, alt: 'En pumpa med glasögon' },
  { id: 6, src: IgelkotteLov, alt: 'Igelkotte bland löv' },

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



/*
const GhostAnimation = keyframes`
  0% {
    background-image: url(${Ghost1});
    transform: translateY(0);
  }
  25% {
    background-image: url(${Ghost2});
    transform: translateY(-5px); // liten rörelse upp 
  }
  50% {
    background-image: url(${Ghost1});
    transform: translateY(0);
  }

  75% {
    background-image: url(${Ghost2});
    transform: translateY(5px); // liten rörelse ner 
  }
  100% {
    background-image: url(${Ghost1});
    transform: translateY(0);
  }
`;*/


const GhostAnimation = keyframes`
  0%, 50%, 100% { content: url(${Ghost1}); transform: translateY(0); }
  25%, 75% { content: url(${Ghost2}); transform: translateY(-5px); }
`;

export const HalloweenImage = styled.div`
  width: 160px;
  margin-top: 20px;

  -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter
  animation: ${GhostAnimation} 5s infinite steps(1);


    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 200px;
    margin-top: 40px;
    margin-bottom: 20px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 280px;
      margin-top: 60px;
    }
  
`;

/*
export const HalloweenImage = styled.div`
  width: 160px;
  height: 160px;
  padding-top: 15px;
  cursor: pointer;
  background-image: url(${Ghost1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter
  //transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    //transform: scale(1.1);
    background-image: url(${Ghost2});
  }

  &:active {
    background-image: url(${Ghost2});
    //transform: scale(1.1);
    //transform: scale(0.98); // liten klick-animation 
  }


    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 200px;
    height: 200px;
    padding-top: 40px;
    padding-bottom: 20px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 280px;
      height: 280px;
      padding-top: 60px;
    }
  
`;*/

export const Halloweenmemory: React.FC = () => {
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const soundRef = useRef<SoundPlayerHalloweenHandle>(null);

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
  
  // --------------------- Koden nedan gör så att sidan hamnar högst upp när den öppnas ---------------------- // 
  // Går inte att ha den här scrollkoden i just memoryspelet. Det scrollas upp varje gång man väljer ett kort! //
  /**setTimeout(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, 0); **/
  // ---------------------------------------- SLUT PÅ SCROLLKOD ---------------------------------------------- //
  

  return (
    <HalloweenBackground>
      <SoundPlayerHalloween ref={soundRef} 
          winVolume={0.5}  // Sätt volymen för 'win' ljudet till 50%
          flipVolume={1.0}  // Behåll flip-ljudet på full volym
          matchVolume={0.8} // Sätt match-ljudet till 80% volym
          />

                <TitleToggleWrapper>
                  
                <div/>
                 <H1HalloweenSecond>Halloween-memory</H1HalloweenSecond>
          
                 <div>
                  <DifficultyToggleHalloween
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
          <SnowFallOrange count={50} />
          <HalloweenMemoryModal>
            <p>Grattis du hittade allt! Spela igen?</p>
            <ButtonWrapper>
              <HalloweenButton onClick={shuffleCards}>Ja</HalloweenButton>
              <HalloweenButton onClick={() => { setShowModal(false); navigate('/pysselspel'); }}>Nej</HalloweenButton>
            </ButtonWrapper>
          </HalloweenMemoryModal>
        </>
      )}
      <HalloweenImage />
      
    </HalloweenBackground>
  );
};
