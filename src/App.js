import React, { useEffect, useRef } from "react";
import People from "./assets/images/people.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const App = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".App__imageContainer:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, delay: -1.4 });
  }, [tl, imageReveal, image]);

  return (
    <div className="App">
      <div className="App__inner" ref={(el) => (container = el)}>
        <div className="App__imageContainer">
          <img src={People} alt="people" ref={(el) => (image = el)} />
        </div>
      </div>
    </div>
  );
};

export default App;
