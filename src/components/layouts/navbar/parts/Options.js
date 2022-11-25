import React from "react";
import "../Navbar.scss";
import { navbar } from "../../../../data/Data";
export default function Options() {
  return (
    <div id="options">
      {navbar.options.map((value, index) => {
        return (
          <div key={`${index}${value}`} id="opt">
            <span id="navtxt">{value}</span>
          </div>
        );
      })}
    </div>
  );
}
