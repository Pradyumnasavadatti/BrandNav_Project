import React from "react";
import "./Plan.scss";
import { plans } from "../../../data/Data";

import Card from "./PlanCard";

export default function Plan() {
  return (
    <div id="plan">
      <div id="planSub">
        <div id="planHead">
          <p>{plans.heading}</p>
        </div>
        <div id="planSubHead">{plans.para}</div>
        <div id="planMain">
          <Card plans={plans} num={0} />
          <Card plans={plans} num={1} />
          <Card plans={plans} num={2} />
        </div>
      </div>
    </div>
  );
}
