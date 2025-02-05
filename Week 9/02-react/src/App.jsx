// creating a automatic counter

import {useState} from "react";

function App() {
  return (
    <div>
      <b>Hi there</b>
      <Counter></Counter>
    </div>
  );
}

// creating the counter component
function Counter() {

  // using the use state hook and initializing the state
  const [count , setCount] = useState(0);

 setInterval(function(){
  setCount(count + 1);

 }, 1000)

  return (
    <div>
      <h1>{count}</h1>
      
    </div>
  );
}

export default App;
