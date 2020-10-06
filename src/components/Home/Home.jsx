import React, { useState } from "react";
import Analog from "../Analog/Analog";
import Dates from "../Dates/Dates";
import Digital from "../Digital/Digital";
import "./Home.css";

function Home() {
  const present = new Date(),
    date = present.getDate(),
    month = present.getMonth();
  const [secondsDegree, setSecondsDegree] = useState(present.getSeconds() * 6),
    [minutesDegree, setMinutesDegree] = useState(present.getMinutes() * 6),
    [hoursDegree, setHoursDegree] = useState(
      (+present.getMinutes() >= 30
        ? +present.getHours() >= 12
          ? +present.getHours() - 12
          : +present.getHours()
        : present.getHours() - 11) * 30
    ),
    setSeconds = () => {
      const now = new Date();
      setSecondsDegree(now.getSeconds() * 6);
    },
    setMinutes = () => {
      const now = new Date();
      setMinutesDegree(now.getMinutes() * 6);
    },
    setHours = () => {
      const now = new Date();
      setHoursDegree(
        (+now.getMinutes() >= 30
          ? +now.getHours() >= 12
            ? +now.getHours() - 12
            : +now.getHours()
          : now.getHours() - 11) * 30
      );
    };
  setInterval(setSeconds, 1000);
  setInterval(setMinutes, 60000);
  setInterval(setHours, 3600000);
  return (
    <React.Fragment>
      <Dates date={date} month={month} />
      <Analog
        secondsDegree={secondsDegree}
        hoursDegree={hoursDegree}
        minutesDegree={minutesDegree}
      />
      <Digital
        hours={hoursDegree / 30}
        minutes={minutesDegree / 6}
        seconds={secondsDegree / 6}
      />
    </React.Fragment>
  );
}

export default Home;
