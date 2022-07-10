import React, { useEffect, useRef } from "react";
import animated from '../assets/1.mp4'

export default function App() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="App">

      <div>
        <video
          style={{ maxWidth: "100%", width: "1000px", margin: "0 auto" }}
          playsInline
          loop
          muted

          alt="All the devices"
          src={animated}
          ref={videoEl}
        />
      </div>
    </div>
  );
}
