import { useState } from "react"
import VideoPlayer from "./Components/VideoPlayer"
import videoCategoryData from "./data/videoCategoryData"

import arrowDown from "./assets/icons/icon--arrow-down.png"

function App(){

  const [activeVideo,setActiveVideo] = useState<string>(
    videoCategoryData[2].videos[0]
  );

  const [isSceneControlVisible, setIsSceneControlVisible] = useState<boolean> (false);
  const sceneControlVisibility = () => {
    setIsSceneControlVisible(!isSceneControlVisible);
  };


  return (
    <main className="relative h-screen bg-black overflow-hidden text-amber-50">
      <div className="absolute top-4 left-1/2 w-fit max-w-130 min-w-67.5 flex flex-col gap-2 translate-x-[-50%] z-50 transition-all ease-in-out duration-300">

      <button className="mt-4 flex items-center justify-center self-center w-fit rounded-b-full p-2 cursor-pointer" onClick={sceneControlVisibility}>
        <img src={arrowDown} className={`w-10 animate-bounce invert ${isSceneControlVisible ? "rotate-180" : "rotate-0"}`} alt="Arrow Down" />
      </button>
      
      </div>
      <VideoPlayer video={activeVideo}></VideoPlayer>
    </main>
  )
}

export default App