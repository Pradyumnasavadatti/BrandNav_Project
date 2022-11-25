import React from "react";
import "./Main.scss";
import Image from "./parts/Img.js";
import Content from "./parts/Content";

export default function Main() {
  return (
    <div id="headContainer">
      <div id="headSubContainer">
        <Content />
        <Image />
      </div>
    </div>
  );
}
