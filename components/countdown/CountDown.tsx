import React, { useState, useEffect } from "react";
import { useStyles } from "./CountDownStyles";

export const CountDown: React.FC = () => {
  const classes = useStyles();

  useEffect(() => {
    // funcCountDown();
  }, []);
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  // const funcCountDown = () => {
  //   setInterval(() => {
  //     const future = Date.parse("17 March 2022 06:30:00");
  //     const now: any = new Date();
  //     const diff: any = future - now;

  //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(diff / (1000 * 60 * 60));
  //     const mins = Math.floor(diff / (1000 * 60));
  //     const secs = Math.floor(diff / 1000);

  //     const d = days;
  //     const h = hours - days * 24;
  //     const m = mins - hours * 60;
  //     const s = secs - mins * 60;
  //     setCountdown({
  //       days: d,
  //       hours: h,
  //       minutes: m,
  //       seconds: s,
  //     });
  //   }, 1000);
  // };

  return (
    <div className={classes.container}>
      <div className={classes.timer}>
        <div className={classes.timeblock}>
          <div>{countdown.days}</div>
          <span className={classes.timetext}>Days</span>
        </div>
        <div className={classes.timeblock}>
          <div>{countdown.hours}</div>
          <span className={classes.timetext}>Hours</span>
        </div>
        <div className={classes.timeblock}>
          <div>{countdown.minutes}</div>
          <span className={classes.timetext}>Minutes</span>
        </div>
        <div className={classes.timeblock}>
          <div>{countdown.seconds}</div>
          <span className={classes.timetext}>Seconds</span>
        </div>
      </div>
    </div>
  );
};
