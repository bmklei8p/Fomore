import React from 'react';
import backgroundTravelVideo from "./travel_splash_movie.mov"
import Welcome from './Welcome';


const LandingPage = () => {
  return (
    <div className="main">
        <div className="overlay">
            <video src={backgroundTravelVideo} autoPlay muted />
            <Welcome />
        </div>
    </div>
  );
};

export default LandingPage;
