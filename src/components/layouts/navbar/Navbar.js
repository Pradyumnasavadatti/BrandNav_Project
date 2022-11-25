import React from "react";
import Logo from "./parts/Logo";
import Options from "./parts/Options";
import Sign from "./parts/Sign";

export default function Navbar() {
  return (
    <div id="container">
      <div id="subContainer">
        <Logo />
        <Options />
        <Sign />
      </div>
    </div>
  );
}
