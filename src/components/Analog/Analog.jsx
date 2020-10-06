import React from "react";
import "./Analog.css";

function Analog(props) {
  let transition;
  if (props.secondsDegree > 59 * 6 || props.secondsDegree <= 6) {
    transition = "none";
  } else {
    transition = "all 0.3s cubic-bezier(0.32, 3.37, 0.58, 1)";
  }
  return (
    <div className="analog">
      <div
        className="seconds"
        style={{
          transform: `rotate(${props.secondsDegree}deg)`,
          transition: `${transition}`,
        }}
      ></div>
      <div
        className="minutes"
        style={{
          transform: `rotate(${props.minutesDegree}deg)`,
        }}
      ></div>
      <div
        className="hour"
        style={{
          transform: `rotate(${props.hoursDegree}deg)`,
        }}
      ></div>
      <div className="mid"></div>
    </div>
  );
}

export default Analog;
