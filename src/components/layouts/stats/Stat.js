import React from "react";
import "./Stat.scss";
import { statistics } from "../../../data/Data";
import Display from "./StatMain";
export default function Stat() {
  return (
    <div id="statContainer">
      <div id="statSubContainer">
        <Display
          logo={statistics.img[0]}
          head={statistics.head[0]}
          subHead={statistics.subHead[0]}
        />
        <div id="statLine"></div>
        <Display
          logo={statistics.img[1]}
          head={statistics.head[1]}
          subHead={statistics.subHead[1]}
        />
        <div id="statLine"></div>
        <Display
          logo={statistics.img[2]}
          head={statistics.head[2]}
          subHead={statistics.subHead[2]}
        />
      </div>
    </div>
  );
}
