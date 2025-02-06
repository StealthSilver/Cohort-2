import { useState, useEffect } from "react"



function App() {
  

  return (
    <div>
      <Counter></Counter>
      After Counter
    </div>
  )


}

function Counter(){



  useEffect(function(){

    console.log("mount")

    return function(){
      console.log("unmount")
    }
    
  }, []);


  return <div>Counter ! </div>
}

export default App
