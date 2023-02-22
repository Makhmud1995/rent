import React from "react";

import VideoPlayer from "react-video-js-player";
import img1 from "../../../assets/Rectangle 2 (1).png";
import img2 from "../../../assets/Rectangle 2 (1).png";
import img3 from "../../../assets/Rectangle 2 (1).png";
import img4 from "../../../assets/Rectangle 2 (1).png";
import car from "../../Data/assets/car.mp4";
import car2 from "../../Data/assets/car.mp4";
import car3 from "../../Data/assets/car.mp4";
import car4 from "../../Data/assets/car.mp4";
import { Container} from "./Video";
//import data from "../../Data/DataMotorVideo";

const VideoPage = () => {
  const videoSrc = car;
  const videoSrc2 = car2;
  const videoSrc3= car3;
  const videoSrc4= car4;

  const poster = img1;
  const poster2 = img2;
  const poster3 = img3;
  const poster4 = img4;
  // "https://media.istockphoto.com/photos/camper-van-summer-trip-picture-id1023079358?k=20&m=1023079358&s=612x612&w=0&h=osq1jeZMvFbEqL3Zep2q_F5qxOausXQisYPve0ECL6M=";

  return (
    <Container>
      <VideoPlayer
        src={videoSrc}
        poster={poster}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc2}
        poster={poster2}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc3}
        poster={poster3}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc4}
        poster={poster4}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc}
        poster={poster}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc2}
        poster={poster2}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc3}
        poster={poster3}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
      <VideoPlayer
        src={videoSrc4}
        poster={poster4}
        width="292"
        height="292"
        // playbackRates={[0.5, 1, 3.85, 16]}
      />
     
    </Container>
  );
};

export default VideoPage;