import type React from "react";
import type { Song } from "../types/types";
import prev_icon from "../assets/icons/icon--next.png";
import play_icon from "../assets/icons/icon--play.png";
import pause_icon from "../assets/icons/icon--pause.png";
import next_icon from "../assets/icons/icon--next.png";
import { useEffect, useRef, useState } from "react";
import musicCategories from "../data/musicCategories";

interface Props {
  activeMusicCategory: number;
  currentTrack: Song | null;
  songIndex: number;
  setSongIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Song | null>>;
}

const PlayerControls = ({
  activeMusicCategory,
  currentTrack,
  songIndex,
  setSongIndex,
  setCurrentTrack,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(20);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrack]);

  //keep current track in sync with songIndex and activeMusicCategory
  useEffect(() => {
    setCurrentTrack(musicCategories[activeMusicCategory].music[songIndex]);
  }, [songIndex, activeMusicCategory]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => {
      // Move to the next track when the current track ends
      nextSong();
    };
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [activeMusicCategory]);

  const nextSong = () => {
    setSongIndex((prevIndex) => {
      const nextIndex =
        prevIndex < musicCategories[activeMusicCategory].music.length - 1
          ? prevIndex + 1
          : 0;

      setIsPlaying(true); // Automatically play the next song
      return nextIndex;
    });
  };

  const prevSong = () => {
    setSongIndex((prevIndex) => {
      const prevSongIndex =
        prevIndex > 0
          ? prevIndex - 1
          : musicCategories[activeMusicCategory].music.length - 1;
      return prevSongIndex;
    });
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button className="rotate-180 w-10 sm:w-11.5 cursor-pointerhover:scale-105 transition-transform ease-in-out duration-200">
        <img src={prev_icon} className="invert" alt="Previous" />
      </button>
      <button
        className="cursor-pointer w-12 sm:w-15 hover:scale-105 transition-transform ease-in-out duration-200"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <img
          src={isPlaying ? pause_icon : play_icon}
          alt={isPlaying ? "Pause" : "Play"}
          className="invert"
        />
      </button>
      <button className="w-10 sm:w-11.5 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200">
        <img src={next_icon} className="invert" alt="Next" />
      </button>

      <audio src={currentTrack?.src} ref={audioRef} autoPlay={isPlaying} />
    </div>
  );
};

export default PlayerControls;
