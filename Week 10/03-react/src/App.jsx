//clock with a start and a stop button

import { useState, useRef } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const intervalRef = useRef(null);

  function startClock() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentCount((c) => c + 1);
      }, 1000);
    }
  }

  function stopClock() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div>
      {currentCount} <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
}

export default App;
