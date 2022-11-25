import React from "react";
import "../Main.scss";
import { head } from "../../../../data/Data";

export default function Img() {
  return (
    <div id="headImg">
      <object id="headImg" data={head.img[0]} />
    </div>
  );
}
