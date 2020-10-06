import React from "react";
import "./Digital.css";

function Digital({ hours, minutes, seconds }) {
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return <div className="time">{`${hours}.${minutes}`}</div>;
}

export default Digital;
