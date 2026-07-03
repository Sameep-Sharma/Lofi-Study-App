import { useState, useRef } from "react";
import VideoPlayer from "./Components/VideoPlayer";
import videoCategoryData from "./data/videoCategoryData";
import musicCategories from "./data/musicCategories";
import type {Song}  from "./types/types";
import shrink_icon from "./assets/icons/icon--shrink.png";
import expand_icon from "./assets/icons/icon--expand.png";
import arrowDown from "./assets/icons/icon--arrow-down.png";
import PlayerControls from "./Components/PlayerControls";

function App() {
  const [activeVideo, setActiveVideo] = useState<string>(
    videoCategoryData[2].videos[0],
  );
  const fullscreenRef = useRef<HTMLElement>(null);
  const [activeVideoCategory, setActiceVideoCategory] = useState<number>(0);

  const [activeMusicCategory, setActiveMusicCategory] = useState<number>(0);

  const [currentTrack, setCurrentTrack] = useState<Song | null>(
    musicCategories[activeMusicCategory].music[0],
  );

  const [isSceneControlVisible, setIsSceneControlVisible] =
    useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [songIndex,setSongIndex] = useState<number>(0);

  const sceneControlVisibility = () => {
    setIsSceneControlVisible(!isSceneControlVisible);
  };

  const toggleFullscreen = () => {
    if (!fullscreenRef.current) return;

    if (isFullScreen) {
      document.exitFullscreen().catch((err) => {
        console.error("Error exiting fullscreen:", err);
      });
      setIsFullScreen(false);
    } else {
      fullscreenRef.current.requestFullscreen().catch((err) => {
        console.error("Error entering fullscreen:", err);
      });
      setIsFullScreen(true);
    }
  };
  return (
    <>
      <main
        className="relative h-screen bg-black overflow-hidden text-amber-50"
        ref={fullscreenRef}
      >
        <button
          className="absolute top-4 sm:top-8 right-4 sm:right-8 z-50 flex items-center justify-center h-10 sm:h-12 aspect-46/48 bg-black/40 backdrop-blur-sm border border-white/20 rounded-md hover:scale-105 transition-transform ease-in-out duration-200"
          onClick={toggleFullscreen}
        >
          <img
            src={isFullScreen ? shrink_icon : expand_icon}
            className="invert h-[70%]"
            alt="Fullscreen Toggle"
          />
        </button>

        <div
          className={`absolute top-4 left-1/2 w-fit max-w-130 min-w-67.5 flex flex-col gap-2 translate-x-[-50%] z-50 transition-all ease-in-out duration-300 ${isSceneControlVisible ? "translate-y-0" : "translate-y-[-80%]"}`}
        >
          <div className="flex items-center justify-center self-center border border-white/20 gap-6 bg-black/70 py-2 px-6 rounded-full shadow-md ">
            {videoCategoryData.map((cat, index: number) => {
              return (
                <button
                  key={cat.id}
                  className={`relative
                    ${activeVideoCategory === index ? "opacity-100" : "opacity-50"}`}
                  onClick={() => {
                    setActiveVideo(cat.videos[0]);
                    setActiceVideoCategory(index);
                  }}
                >
                  <img
                    src={cat.icon}
                    className="w-9 invert"
                    alt={cat.category}
                  />

                  {activeVideoCategory === index && (
                    <div className="absloute w-1 h-1 bg-green-400 rounded-full left-1/2 -translate-x-1/2 -bottom-1"></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-2 flex gap-2 flex-wrap justify-center bg-black/40 border border-white/20 rounded-lg shadow-sm">
            {videoCategoryData[activeVideoCategory].videos.map((video) => {
              return (
                <button
                  key={video}
                  className="aspect-video"
                  onClick={() => {
                    setActiveVideo(video);
                  }}
                >
                  <video
                    src={video}
                    className={`aspect-video w-30 rounded-md ${
                      activeVideo === video
                        ? "ring-2 ring-green-400 opacity-100"
                        : "opacity-90"
                    }`}
                    preload="metadata"
                  />
                </button>
              );
            })}
          </div>

          <button
            className="mt-4 flex items-center justify-center self-center w-fit rounded-b-full p-2 cursor-pointer"
            onClick={sceneControlVisibility}
          >
            <img
              src={arrowDown}
              className={`w-10 animate-bounce invert ${isSceneControlVisible ? "rotate-180" : "rotate-0"}`}
              alt="Arrow Down"
            />
          </button>
        </div>
        <VideoPlayer video={activeVideo}></VideoPlayer>

        <footer className="absolute w-full grid md:grid-cols-3 grid-cols-1 bottom-0 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="self-center w-full md:w-fit order-1 md:order-0">
            {currentTrack && (
              <p className="mt-2 px-4 py-2 bg-black/40 text-white/90 flex items-center justify-center gap-2 md:rounded-r-lg">
                <span className="hidden lg:block">Now Playing:</span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {currentTrack.title}
                </span>
              </p>
            )}
          </div>
            <PlayerControls
            activeMusicCategory={activeMusicCategory}
            currentTrack={currentTrack}
            songIndex={songIndex}
            setSongIndex={setSongIndex}
            setCurrentTrack={setCurrentTrack}
            />
          <div className="hidden md:block mt-2 pr-8 text-right self-center">
            <a href="https://github.com/Sameep-Sharma" target="_blank">
              @Sameep-Sharma
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
