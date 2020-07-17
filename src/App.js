import React, { useEffect } from "react";

// 3rd-party libraries
import gsap from "gsap";

// assets
import logo from "./logo.svg";

function App() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  useEffect(() => {
    gsap.from(".App__description", 1, { opacity: 0, y: 40 });

    gsap.from(".App__image", 1, { opacity: 0, scale: 0.8, delay: 0.8 });
  }, []);

  return (
    <div className="App">
      <div className="App__inner">
        <div className="App__image">
          <img src={logo} alt="react-icon" />
        </div>
        <div className="App__description">
          <small>React + Gsap</small>
        </div>
      </div>
    </div>
  );
}

export default App;
