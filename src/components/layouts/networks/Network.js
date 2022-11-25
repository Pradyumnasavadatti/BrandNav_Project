import React from "react";
import "./Network.scss";
import { networks } from "../../../data/Data";
export default function Network() {
  return (
    <div id="network">
      <div id="networkHead">{networks.heading}</div>
      <div id="networkSubHead">{networks.para}</div>
      <div id="networkGlobe">
        <img src={networks.img[0]} alt="Loading..." />
      </div>
    </div>
  );
}
