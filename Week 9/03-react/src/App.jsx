import { useState, useEffect } from "react"



function App() {
  

  const [count , setCount] = useState(0);
  
  

  return (
    <div>
      <Counter count = {count}/>
      <button onClick = {increase}>Increase Count</button>>
    </div>
  )


}

function Counter(props){



  useEffect(function(){

    console.log("mount")

    return function(){
      console.log("unmount")
    }
    
  }, []);


  return <div>Counter {props.count} </div>
}

export default App
