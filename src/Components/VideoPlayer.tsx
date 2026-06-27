import { useEffect, useRef, useState } from 'react'
interface Props {
  video:string;

}
const VideoPlayer = ( {video} : Props) => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideo,setCurrentVideo] = useState<string>(video);
  const [fade,setFade] = useState<boolean>(false)

  //handle video change
  useEffect(() => {
    if(!video) return;

    if(videoRef.current){
      //fade out
      setFade(true);

      //wait for fade out anim
      const timeout = setTimeout(() => {
        setCurrentVideo(video);
        setFade(false);
        videoRef.current?.play
      },100);

      return  () => clearTimeout(timeout)
    }

  },[video])

  return (
    <div className='fixed inset-0 bg-amber-300'>
      <video
      ref={videoRef}
      src={currentVideo} loop autoPlay muted className={`object-cover w-full h-full transition-opacity duration-100 ${fade ? "opacity-0 " : "opacity-100"}`}
      />
    </div>
  )
}

export default VideoPlayer