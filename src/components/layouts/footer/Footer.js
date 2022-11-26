import React from "react";
import "./Footer.scss";
import { footer } from "../../../data/Data";
export default function Footer() {
  let arr = footer.img.filter((val) => val != footer.img[0]);
  return (
    <div id="footer">
      <div id="footerSub">
        <div id="footerPart1">
          <div id="footerPart11">
            <img
              src={footer.img[0]}
              alt="Loading..."
              width="100%"
              height="100%"
            />
          </div>
          <div id="footerPart12">{footer.para}</div>
          <div id="footerPart13">
            {arr.map((val, ind) => {
              return <img src={val} alt="Loading..." />;
            })}
          </div>
          <div id="footerPart14">{footer.copyRight}</div>
        </div>
        {footer.head.map((val, ind) => {
          return (
            <div id="footerPart2">
              <div id="footerHead">{val}</div>
              {footer.points[ind].map((val, ind) => {
                return <div id="footerTxt">{val}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
