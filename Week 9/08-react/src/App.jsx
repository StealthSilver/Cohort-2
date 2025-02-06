import {useEffect , useState} from "react";

function App() {
  const [count, setCount] = useState(1)
  const [count2, setCount2] = useState(1)

function increaseCount(){
  setCount (currentValue => currentValue + 1)
}

function decreaseCount(){
  setCount2(currentValue => currentValue -1)
}

// this code will only run on mount and not on every render
useEffect(()=> {
  
  setInterval(increaseCount, 3000);
  setInterval(decreaseCount, 4000);
}, []) 
// this effect will run only on mount, because the array is empty



useEffect(()=> {
  console.log("the count has been updated to " + count)
  
}, [count ,count2]) 
// this effect will run every time the count2 changes as there is the variable in the dependency array


  return (
    <div>
      {count} {count2}
    </div>
  )
}

export default App
