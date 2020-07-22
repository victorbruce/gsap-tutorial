import React, { useEffect, useRef } from "react";

// 3rd-party libraries
import { TweenMax, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let circleRed = useRef(null);
  let circleYellow = useRef(null);
  let circleGreen = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    TweenMax.from(circleRed, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    TweenMax.from(circleYellow, 0.8, {
      opacity: 0,
      x: 60,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.from(circleGreen, 0.8, {
      opacity: 0,
      x: 80,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="App" ref={(el) => (app = el)}>
      <h1>Gsap TweenMax</h1>

      <div className="Circle__container">
        <div className="Circle__color red" ref={(el) => (circleRed = el)}></div>
        <div
          className="Circle__color yellow"
          ref={(el) => (circleYellow = el)}
        ></div>
        <div
          className="Circle__color green"
          ref={(el) => (circleGreen = el)}
        ></div>
      </div>
    </div>
  );
}

export default App;
