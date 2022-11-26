import React, { useRef, useEffect } from "react";
import { reviews } from "../../../data/Data";
import Card from "./Card";
import "./Review.scss";
export default function Review() {
  const slider = useRef();
  const back = useRef();
  const fow = useRef();
  let i = 0,
    lef = 0;
  let x = 100 / (reviews.user.length / 3);

  useEffect(() => {
    back.current.disabled = true;
  }, []);
  const moveFow = () => {
    if (i !== reviews.user.length) {
      let y = lef + x;
      slider.current.style.transform = `translateX(${-y}%)`;
      lef += x;
      slider.current.style.transition = "all 1s";
      back.current.disabled = false;
      i++;
      if (i === reviews.user.length / 3 - 1) {
        fow.current.disabled = true;
      }
    }
  };
  const moveBac = () => {
    if (i !== 0) {
      let y = x - lef;
      slider.current.style.transform = `translateX(${y}%)`;
      slider.current.style.transition = "all 1s";
      lef -= x;
      fow.current.disabled = false;
      i--;
      if (i === 0) {
        back.current.disabled = true;
      }
    }
  };
  return (
    <div id="review">
      <div id="reviewSub">
        <div id="reviewHead">{reviews.heading}</div>
        <div id="reviewSubHead">{reviews.para}</div>
        <div id="reviews">
          <div id="reviewCard" ref={slider}>
            {reviews.user.map((val, ind) => {
              return <Card reviews={reviews} num={ind} />;
            })}
          </div>
          <div id="reviewControl">
            <div id="reviewCurrent"></div>
            <div id="reviewNavigate">
              <button id="btn" ref={back} onClick={moveBac}>
                Back
              </button>
              <button id="btn" ref={fow} onClick={moveFow}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
