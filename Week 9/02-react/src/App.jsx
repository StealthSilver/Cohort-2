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


  // hooking into the lifecycle events of react

  // guard our setInterval from re-renders

  useEffect(function(){
    setInterval(function(){
      setCount(count => count + 1);
     }, 1000)
     console.log("mounted")
  }, []);


  return (
    <div>
      <h1>{count}</h1>
      
    </div>
  );
}

export default App;
