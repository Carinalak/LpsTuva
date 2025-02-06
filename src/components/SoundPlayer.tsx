import { useRef, useImperativeHandle, forwardRef } from "react";
import FlipSound from "../assets/sounds/card_flip.ogg"; 
import AchievementSound from "../assets/sounds/achievement-sparkle.wav";
import WinSound from "../assets/sounds/win.flac"; 

export interface SoundPlayerHandle {
  play: (soundType: "flip" | "match" | "win") => void;
}

interface SoundPlayerProps {
  winVolume?: number;
  flipVolume?: number; 
  matchVolume?: number;
}

export const SoundPlayer = forwardRef<SoundPlayerHandle, SoundPlayerProps>(({
  winVolume = 1.0,
  flipVolume = 1.0,
  matchVolume = 1.0
}, ref) => {
  const flipRef = useRef<HTMLAudioElement | null>(null);
  const matchRef = useRef<HTMLAudioElement | null>(null);
  const winRef = useRef<HTMLAudioElement | null>(null);

  // Sätt volymen för respektive ljud
  if (flipRef.current) flipRef.current.volume = flipVolume;
  if (matchRef.current) matchRef.current.volume = matchVolume;
  if (winRef.current) winRef.current.volume = winVolume;

  useImperativeHandle(ref, () => ({
    play: (soundType) => {
      const soundRef =
        soundType === "flip" ? flipRef.current :
        soundType === "match" ? matchRef.current :
        soundType === "win" ? winRef.current : null;

      if (soundRef) {
        soundRef.currentTime = 0;
        soundRef.play();
      }
    },
  }));

  return (
    <>
      <audio ref={flipRef} src={FlipSound} />
      <audio ref={matchRef} src={AchievementSound} />
      <audio ref={winRef} src={WinSound} />
    </>
  );
});