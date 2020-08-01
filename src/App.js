import React, { useRef, useEffect, useState } from "react";

import { TweenLite, Power3 } from "gsap";

import LeftArrow from "./assets/images/arrow-left.svg";
import RightArrow from "./assets/images/arrow-right.svg";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/images/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/images/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/images/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];

const App = () => {
  let imageList = useRef(null);
  let testimonialList = useRef(null);

  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, { opacity: 1 });
  }, []);

  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[0], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, { opacity: 0 });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  // function
  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });

      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);

      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      slideLeft(1, 1, 2);
      slideLeft(2, 1);

      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);

      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  // prev slide
  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="App">
      <div className="App__container" onClick={prevSlide}>
        {/* Left Arrow */}
        <div className="App__leftArrow App__arrows">
          <span>
            <img src={LeftArrow} alt="left arrow" />
          </span>
        </div>

        <div className="App__testimonials">
          <div className="App__testimonials__image">
            <ul ref={(el) => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="App__testimonials__content">
            <ul ref={(el) => (testimonialList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="App__testimonials__content__inner">
                  <p className="App__testimonials__quote">
                    {testimonials[0].quote}
                  </p>
                  <h3 className="App__testimonials__name">
                    {testimonials[0].name}
                  </h3>
                  <h4 className="App__testimonials__title">
                    {testimonials[0].title}
                  </h4>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="App__testimonials__content__inner">
                  <p className="App__testimonials__quote">
                    {testimonials[1].quote}
                  </p>
                  <h3 className="App__testimonials__name">
                    {testimonials[1].name}
                  </h3>
                  <h4 className="App__testimonials__title">
                    {testimonials[1].title}
                  </h4>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="App__testimonials__content__inner">
                  <p className="App__testimonials__quote">
                    {testimonials[2].quote}
                  </p>
                  <h3 className="App__testimonials__name">
                    {testimonials[2].name}
                  </h3>
                  <h4 className="App__testimonials__title">
                    {testimonials[2].title}
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="App__rightArrow App__arrows" onClick={nextSlide}>
          <span>
            <img src={RightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
