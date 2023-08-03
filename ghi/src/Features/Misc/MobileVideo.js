import React, { useState, useEffect } from "react";
import mobileVideo from "../../media/mobile1.mov";

const MobileVideo = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById("videoElement");

    const updateTime = () => {
      setCurrentTime(videoElement.currentTime);
    };

    videoElement.addEventListener("timeupdate", updateTime);

    return () => {
      videoElement.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  return (
    <div className="video-container">
      <video id="videoElement" autoPlay loop muted>
        {/* Provide the video source here */}
        <source src={mobileVideo} type="video/mp4" />
      </video>
      <div className="text-container">
        {currentTime > 2 && (
          <>
            <h1>Text 1</h1>
            <button>Button 1</button>
          </>
        )}
        {currentTime > 3 && (
          <>
            <h1>Text 2</h1>
            <button>Button 2</button>
          </>
        )}
        {currentTime > 4 && (
          <>
            <h1>Text 3</h1>
            <button>Button 3</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileVideo;
