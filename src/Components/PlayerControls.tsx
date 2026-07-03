import type React from "react";
import type { Song } from "../types/types";
import prev_icon from "../assets/icons/icon--next.png";
import play_icon from "../assets/icons/icon--play.png";
import pause_icon from "../assets/icons/icon--pause.png";

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
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="rotate-180 w-10 sm:w-11.5 cursor-pointerhover:scale-105 transition-transform ease-in-out duration-200">
        <img src={prev_icon} className="invert" alt="Previous" />
      </button>
      <button className="cursor-pointer w-12 sm:w-15 hover:scale-105 transition-transform ease-in-out duration-200">
      </button>
    </div>
  );
};

export default PlayerControls;
