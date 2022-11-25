import React from "react";
import { platforms } from "../../../data/Data";
import "./Platform.scss";
export default function Platform() {
  return (
    <div id="platform">
      <div id="platformSub">
        {platforms.img.map((val, ind) => {
          return (
            <img
              id="platformDisplay"
              src={platforms.img[ind]}
              alt="Loading..."
            />
          );
        })}
      </div>
    </div>
  );
}
