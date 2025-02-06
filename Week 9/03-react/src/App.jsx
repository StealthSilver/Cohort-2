import { useState, useEffect } from "react"



function App() {
  

  const [count , setCount] = useState(0);
  
  

  return (
    <div>
      <Counter count = {count}/>
      After Counter
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
