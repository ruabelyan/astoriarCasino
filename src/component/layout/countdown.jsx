import { t } from "i18next";
import { Component, useState, useEffect } from "react";

const CountDown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("11/09/2022").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <ul className="countdown count-down">
      <li className="clock-item">
        <span className="count-number days">{state.days || "0"}</span>
        <p className="count-text">{t("days")}</p>
      </li>

      <li className="clock-item">
        <span className="count-number hours">{state.hours || "00"}</span>
        <p className="count-text">{t("hour")}</p>
      </li>

      <li className="clock-item">
        <span className="count-number minutes">{state.minutes || "00"}</span>
        <p className="count-text">{t("minutes")}</p>
      </li>

      <li className="clock-item">
        <span className="count-number seconds">{state.seconds || "00"}</span>
        <p className="count-text">{t("seconds")}</p>
      </li>
    </ul>
  );
};

export default CountDown;
