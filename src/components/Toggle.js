import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false); //the initial state false, bc the button should be "OFF" when the component first renders.

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white"; // red ON/ white OFF

  return (
    <button onClick={handleClick} style={{ background: color }}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
