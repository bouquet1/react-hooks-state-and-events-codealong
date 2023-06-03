import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false); //the initial state false, bc the button should be "OFF" when the component first renders.

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
