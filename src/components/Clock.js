import { Fragment } from "react";

export default function Clock({ time = new Date() }) {
  let hours = time.getHours();

  let mode = setMode(hours);

  //console.log("mode = " + mode);

  return (
    <Fragment>
      <h1>This is the Clock component</h1>
      <h2 className={mode} id="time">
        {time.toLocaleTimeString()}
      </h2>
    </Fragment>
  );
}

function setMode(hours) {
  if (hours >= 0 && hours <= 6) {
    return "night";
  } else {
    return "day";
  }
}
