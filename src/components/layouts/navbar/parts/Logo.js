import React from "react";
import "../Navbar.scss";
import { navbar } from "../../../../data/Data";

export default function Logo() {
  return (
    <div id="logo">
      <img src={navbar.img[0]} id="navImg" />
    </div>
  );
}
