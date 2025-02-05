// creating a automatic counter

import {useState, useEffect} from "react";

function App() {
  return (
    <div>
      <b>Hi there</b>
      <Counter></Counter>
    </div>
  );
}

// mounting, re-rendering, unmounting
function Counter() {

  
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
