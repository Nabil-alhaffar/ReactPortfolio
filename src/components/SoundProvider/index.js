import React, { useEffect, useRef } from 'react';
import soundFile from '../../assets/sound/swanLake.mp3';

const SoundProvider = () => {
  const audioRef = useRef(null); // Ref to store the audio element

  useEffect(() => {
    const audio = audioRef.current = new Audio(soundFile);
    audio.loop = true;
    audio.volume = 0.45; // Set volume to 50% (adjust as needed)

    const playAudio = () => {
      audio.play()
        .catch(error => {
          console.error('Failed to play audio:', error);
        });
    };

    const handleMouseMovement = () => {
      // Play audio when mouse movement is detected
      playAudio();
    };

    // Listen for mouse movement to trigger audio playback
    document.addEventListener('mousemove', handleMouseMovement);

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      document.removeEventListener('mousemove', handleMouseMovement);
      audio.pause();
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default SoundProvider;
