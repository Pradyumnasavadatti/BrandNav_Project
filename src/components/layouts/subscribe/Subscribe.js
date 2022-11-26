import React from "react";
import "./Subscribe.scss";
import { subscribe } from "../../../data/Data";
import Button from "../../fragments/Button";
export default function Subscribe() {
  return (
    <div id="subscribe">
      <div id="subscribeSub">
        <div id="subscribeContent">
          <div id="subscribeHeadingDiv">
            <div id="subscribeHead">{subscribe.heading}</div>
            <div id="subscribePara">{subscribe.para}</div>
          </div>
        </div>
        <div id="subscribeBtn">
          <Button width="60%" height="20%" className="class3">
            {subscribe.buttons[0]}
          </Button>
        </div>
      </div>
    </div>
  );
}
