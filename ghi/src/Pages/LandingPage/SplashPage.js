import React, { useState, useRef, useEffect } from "react";
import backgroundTravelVideoDesktop from "./desktop_bg.mov";
import backgroundTravelVideo from "../../media/mobile10.mov";
import Welcome from "./Welcome";
// import MobileVideo from "../../Features/Misc/MobileVideo";
import { GuestLoginButton } from "../../Features/Misc/GuestLoginButton";
import { useDispatch } from "react-redux";
import { showModal, SIGN_UP_MODAL } from "../../app/accountSlice";
import { useNavigate } from "react-router-dom";
import { useGetTokenQuery } from "../../app/accountApi";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    setShowText1(currentTime > 4);
    setShowText2(currentTime > 5);
    setShowText3(currentTime > 6.3);
  };

  const setVideoSpeed = (speed) => {
    videoRef.current.playbackRate = speed;
  };

  useEffect(() => {
    setVideoSpeed(1.25);
  }, []);

  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();
  if (token && !tokenLoading) navigate("/main");

  return (
    <div className="main">
      <div className="overlayDesktop">
        <video src={backgroundTravelVideoDesktop} autoPlay muted />
        <Welcome />
      </div>

      <div className="overlayMobile">
        <video
          id="videoElement"
          ref={videoRef}
          autoPlay
          muted
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={backgroundTravelVideo} type="video/mp4" />
        </video>
        <div className="Welcome-content">
          {showText1 && (
            <div className={`text-container ${showText1 ? "show" : ""}`}>
              <h1
                style={{
                  fontSize: "5rem",
                  marginTop: "3rem",
                  display: "flex",
                  flexDirection: "row",
                  letterSpacing: "-0.3rem",
                }}
              >
                <p style={{ color: "#33cccc" }}>FOMO</p>
                <p style={{ color: "#99ffff" }}>RE</p>
              </h1>
            </div>
          )}
          {showText2 && (
            <div
              style={{ fontWeight: "bold" }}
              className={`text-container ${showText1 ? "show" : ""}`}
            >
              {" "}
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                The quickest way to create and manage itineraries
              </p>
            </div>
          )}{" "}
          {showText3 && (
            <div className={`text-container ${showText1 ? "show" : ""}`}>
              {" "}
              <div
                style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}
              >
                <GuestLoginButton displayType={true} />
                <button
                  style={{ fontWeight: "bold" }}
                  onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
                  className="_sign-up-button"
                >
                  Sign up
                </button>
              </div>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
