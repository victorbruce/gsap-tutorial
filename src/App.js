import React, { useEffect, useRef, useState } from "react";

// 3rd-party libraries
import { TweenLite, Power3 } from "gsap";
import { TweenMax } from "gsap/gsap-core";

function App() {
  let app = useRef(null);
  let circleRed = useRef(null);
  let circleYellow = useRef(null);
  let circleGreen = useRef(null);

  const [scale, setScale] = useState(false);

  useEffect(() => {
    TweenLite.to(app, 0, { css: { visibility: "visible" } });
    TweenLite.from(circleRed, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    TweenLite.from(circleYellow, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenLite.from(circleGreen, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);

  const handleScale = () => {
    if (scale) {
      TweenMax.to(circleYellow, .8, {
        width: 200,
        height: 200,
        ease: Power3.easeOut,
      });
      setScale(false);
    } else {
      TweenMax.to(circleYellow, 1, {
        width: 75,
        height: 75,
        ease: Power3.easeOut,
      });
      setScale(true);
    }
  };

  // const handleDecrease = () => {
  //   TweenMax.to(circleYellow, 1, { scale: 1 });
  //   setScale(false);
  // }

  return (
    <div className="App" ref={(el) => (app = el)}>
      <h1>Gsap TweenMax</h1>

      <div className="Circle__container">
        <div className="Circle__color red" ref={(el) => (circleRed = el)}></div>
        <div
          className="Circle__color yellow"
          ref={(el) => (circleYellow = el)}
          onClick={handleScale}
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
