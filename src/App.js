import React from "react";

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
  return (
    <div className="App">
      <div className="App__container">
        {/* Left Arrow */}
        <div className="App__leftArrow App__arrows">
          <span>
            <img src={LeftArrow} alt="left arrow" />
          </span>
        </div>

        <div className="App__testimonials">
          <div className="App__testimonials__image">
            <ul>
              <li>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="App__testimonials__content">
            <ul>
              <li>
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
              <li>
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
              <li>
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
        <div className="App__rightArrow App__arrows">
          <span>
            <img src={RightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
