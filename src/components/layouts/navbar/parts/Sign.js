import React from "react";
import "../Navbar.scss";
import { navbar } from "../../../../data/Data";
import Button from "../../../fragments/Button";

export default function Sign() {
  return (
    <div id="sign">
      <Button className="class2" width="40%" height="60%">
        {navbar.buttons[0]}
      </Button>
      <Button className="class1" width="40%" height="60%">
        {navbar.buttons[1]}
      </Button>
    </div>
  );
}
