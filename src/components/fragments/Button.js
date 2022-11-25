import React from "react";
import "./Button.scss";

export default function Button({ className, width, height, children }) {
  return (
    <>
      <button style={{ width: width, height: height }} className={className}>
        {children}
      </button>
    </>
  );
}
