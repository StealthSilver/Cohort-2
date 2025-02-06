import {useEffect} from "react";

function App() {
  const [count, setCount] = useState(0)

function increaseCount(){
  setCount (count +1)
}

  return (
    <div>
      {count}
    </div>
  )
}

export default App
