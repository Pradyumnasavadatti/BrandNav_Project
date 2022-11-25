import React from "react";
import "../Main.scss";
import { head } from "../../../../data/Data";
import Button from "../../../fragments/Button";
export default function Content() {
  return (
    <div id="headContent">
      <div id="headHeading">
        <p>{head.heading}</p>
      </div>
      <div id="headPara">
        <p>{head.para}</p>
      </div>
      <div id="headButton">
        <Button className="class3" width="40%" height="30%">
          {head.buttons[0]}
        </Button>
      </div>
    </div>
  );
}
