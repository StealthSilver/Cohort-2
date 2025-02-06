import {useEffect , useState} from "react";

function App() {
  const [count, setCount] = useState(1)

function increaseCount(){
  setCount (currentValue => currentValue + 1)
}

// this code will only run on mount and not on every render
useEffect(()=> {
  console.log("above setinterval")
  setInterval(increaseCount, 1000);
}, [])


  return (
    <div>
      {count}
    </div>
  )
}

export default App
