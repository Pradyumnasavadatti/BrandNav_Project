import React from "react";
import "./Plan.scss";
import Button from "../../fragments/Button";
export default function PlanCard({ plans, num }) {
  return (
    <div id="planCard">
      <div id="planPart1">
        <img src={plans.img[0]} width="100%" height="100%" />
      </div>
      <div id="planPart2">
        <p id="planListHead">{plans.head[num]}</p>
        <div id="planMap">
          <ul>
            {plans.plan[num].map((val, ind) => {
              return (
                <div id="planPoints">
                  <div id="planList">{plans.svg} </div>
                  <li key={`${ind}${val}`}>{val}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div id="planPart3">
        <div id="planPrice">
          <div id="planPriceHead">{plans.price[num]}</div>
          <Button width="80%" height="60%" className="class1">
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}
