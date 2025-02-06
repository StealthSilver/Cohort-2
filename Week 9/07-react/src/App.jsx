import {useEffect , useState} from "react";

function App() {
  const [count, setCount] = useState(1)

function increaseCount(){
  setCount (count +1)
}


useEffect(()=> {
  setInterval(increaseCount, 1000);
}, [])


  return (
    <div>
      {count}
    </div>
  )
}

export default App
