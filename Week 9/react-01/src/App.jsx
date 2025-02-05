import {useState} from "react";

function App() {
  return (
    <div>
      <b>Hi there</b>
      <Counter></Counter>
    </div>
  );
}

function Counter() {

  // using the use state hook and initializing the state
  const [count , setCount] = useState(0);

  function increaseCount(){
   setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count - 1);
  }

  function resetCount(){
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick  = {increaseCount}>Increase Count</button> <br />
      <button onClick  = {decreaseCount}>Decrease Count</button> <br />
      <button onClick  = {resetCount}>Reset Count</button>
    </div>
  );
}

export default App;
