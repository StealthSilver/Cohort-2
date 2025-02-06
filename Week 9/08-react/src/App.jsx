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
// this effect will run only on mount, because the array is empty


useEffect(()=> {
  console.log("the count has been updated to" + count)
  setInterval(increaseCount, 1000);
}, [count]) 



  return (
    <div>
      {count}
    </div>
  )
}

export default App
