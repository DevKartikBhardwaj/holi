import React from "react";

import "./App.css";

import one from "./assets/1.jfif";
import two from "./assets/2.jfif";
import three from "./assets/3.jfif";
import four from "./assets/4.jfif";
const App = () => {
  motion();
  return (
    <div>
      <div className="imageContainer">
        <img src={one} id="img1" alt="Happy Holi" />
        <img src={two} id="img2" alt="Happy Holi" />
        <img src={three} id="img3" alt="Happy Holi" />
        <img src={four} id="img4" alt="Happy Holi" />
      </div>
      <div id="message">
        <h2>
          Wishing you and your family a very <span id="title">Happy Holi</span>
        </h2>
        <p>
          May the charm of Holi inspire you to live with more friends and less
          enemies, more joys and less worries… Happy Holi to you.
        </p>
        <p>
          - <span>&hearts; By Kartik Bhardwaj</span>
        </p>
      </div>
    </div>
  );
};

const motion = () => {
  const width = window.innerWidth;
  let count = 0;
  setInterval(() => {
    if (count <= width * 3) {
      document.getElementById("img1").style.transform = `translate(${
        0 - count
      }px)`;
      document.getElementById("img2").style.transform = `translate(${
        0 - count
      }px)`;
      document.getElementById("img3").style.transform = `translate(${
        0 - count
      }px)`;
      document.getElementById("img4").style.transform = `translate(${
        0 - count
      }px)`;
      count += width;
    } else {
      count = 0;
    }
  }, 2000);
};

export default App;
