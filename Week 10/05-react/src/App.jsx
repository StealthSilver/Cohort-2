import React, { useState } from "react";

// LightBulb Component
const LightBulb = ({ isOn }) => {
  return <div>The light is {isOn ? "ON" : "OFF"}</div>;
};

// LightSwitch Component
const LightSwitch = ({ toggleLight }) => {
  return <button onClick={toggleLight}>Toggle Light</button>;
};

// App Component
const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  return (
    <div>
      <LightBulb isOn={isLightOn} />
      <LightSwitch toggleLight={toggleLight} />
    </div>
  );
};

export default App;
