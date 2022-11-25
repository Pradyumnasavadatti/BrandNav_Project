import React from "react";
import { features } from "../../../data/Data";
import "./Feature.scss";

export default function Feature() {
  return (
    <div id="featureContainer">
      <div id="featureSub">
        <div id="featureImg">
          <img src={features.img[0]} width="80%" height="80%" />
        </div>
        <div id="featureContent">
          <div id="featureFirst">
            <p>{features.heading}</p>
          </div>
          <div id="featureSecond">
            <p>{features.para}</p>
          </div>
          <div id="featureThird">
            <ul>
              {features.points.map((val, ind) => {
                return (
                  <div id="featurePoints">
                    <img id="featureList" src={features.img[1]} />
                    <li key={`${ind}${val}`}>{val}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
