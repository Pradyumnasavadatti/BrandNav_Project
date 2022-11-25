import React from "react";
import "./Stat.scss";

export default function StatMain({ logo, head, subHead }) {
  return (
    <div id="statDiv">
      <div id="statIcon">
        <div id="statIc">{logo}</div>
      </div>
      <div id="statFacts">
        <div id="statFactsSub">
          <div id="statHead">{head}</div>
          <div id="statSubHead">{subHead}</div>
        </div>
      </div>
    </div>
  );
}
