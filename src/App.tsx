import { useState } from "react";
import VideoPlayer from "./Components/VideoPlayer";
import videoCategoryData from "./data/videoCategoryData";

import arrowDown from "./assets/icons/icon--arrow-down.png";

function App() {
  const [activeVideo, setActiveVideo] = useState<string>(
    videoCategoryData[2].videos[0],
  );

  const [activeVideoCategory, setActiceVideoCategory] = useState<number>(0);

  const [isSceneControlVisible, setIsSceneControlVisible] =
    useState<boolean>(false);
  const sceneControlVisibility = () => {
    setIsSceneControlVisible(!isSceneControlVisible);
  };

  return (
    <>
      <main className="relative h-screen bg-black overflow-hidden text-amber-50">
        <div
          className={`absolute top-4 left-1/2 w-fit max-w-130 min-w-67.5 flex flex-col gap-2 translate-x-[-50%] z-50 transition-all ease-in-out duration-300 ${isSceneControlVisible ? "translate-y-0" : "translate-y-[-80%]"}`}
        >
          <div className="flex items-center justify-center self-center border border-white/20 gap-6 bg-black/70 py-2 px-6 rounded-full shadow-md ">
            {videoCategoryData.map((cat, index: number) => {
              return (
                <button
                  key={cat.id}className={`relative
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
      </main>
    </>
  );
}

export default App;
