import { v4 as uuidv4 } from "uuid";
import type { VideoCategory } from "../types/types";
import sunshine_1 from '../assets/videos/sunshine_1.mp4'
import sunshine_2 from '../assets/videos/sunshine_2.mp4'
import sunshine_3 from '../assets/videos/sunshine_3.mp4'
import sunset_sunshine from '../assets/videos/sunset_sunshine.mp4'
import sunset_sunshine_2 from '../assets/videos/sunset_sunshine_2.mp4'
import snow_1 from '../assets/videos/snow_1.mp4'
import snow_2 from '../assets/videos/snow_2.mp4'
import snow_3 from '../assets/videos/snow_3.mp4'
import snow_4 from '../assets/videos/snow_4.mp4'
import rain_1 from '../assets/videos/rain_1.mp4'
import rain_2 from '../assets/videos/rain_2.mp4'
import rain_3 from '../assets/videos/rain_3.mp4'
import rain_4 from '../assets/videos/rain_4.mp4'
import rain_5 from '../assets/videos/rain_5.mp4'
import rain_6 from '../assets/videos/rain_6.mp4'
import night_1 from '../assets/videos/night_1.mp4'
import night_2 from '../assets/videos/night_2.mp4'
import night_3 from '../assets/videos/night_3.mp4'
import night_4 from '../assets/videos/night_4.mp4'
import night_5 from '../assets/videos/night_5.mp4'

import icon_sunshine from'../assets/icons/icon--sunshine.png'
import icon_snow from "../assets/icons/icon--snow.png";
import icon_rain from "../assets/icons/icon--rain.png";
import icon_night_owl from "../assets/icons/icon--moon.png";


const videoCategoryData: VideoCategory [] =  [
  {
    id:uuidv4(),
    category:"Sunshine",
    videos: [sunshine_1,sunshine_2,sunshine_3,sunset_sunshine,sunset_sunshine_2],
    icon: icon_sunshine,
  },
  {
    id: uuidv4(),
    category: "Snow",
    videos: [snow_1,snow_2,snow_3,snow_4],
    icon: icon_snow,
  },
  {
    id: uuidv4(),
    category: "Rain",
    videos: [rain_1,rain_2,rain_3,rain_4,rain_5,rain_6],
    icon: icon_rain,
  },
  {
    id: uuidv4(),
    category: "Night Owl",
    videos: [night_1,night_2,night_3,night_4,night_5],
    icon: icon_night_owl,
  },
];


export default videoCategoryData;