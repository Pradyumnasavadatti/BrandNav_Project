import React from "react";
import "./Review";
export default function Card({ reviews, num }) {
  return (
    <div id="reviewCardMain">
      <div id="reviewCardPart1">
        <div id="reviewCardPart1Sub">
          <div id="reviewCardProfile">
            <img src={reviews.user[num].img[0]} alt="Loading..." />
          </div>
          <div id="reviewCardName">
            <div id="reviewCardNameTop">{reviews.user[num].name}</div>
            <div id="reviewCardNameBottom">{reviews.user[num].place}</div>
          </div>
          <div id="reviewCardRating">
            {reviews.user[num].rating}
            {reviews.svg}
          </div>
        </div>
      </div>
      <div id="reviewCardPart2">
        <div id="reviewCardPart2Sub">"{reviews.user[num].review}"</div>
      </div>
    </div>
  );
}
