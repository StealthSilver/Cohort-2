import { useState } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(1);

  return (
    <div>
      {currentCount} <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
}

export default App;
