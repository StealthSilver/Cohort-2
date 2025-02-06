import { useState, useEffect } from "react"



function App() {
  

  return (
    <div>
      <Counter></Counter>
    </div>
  )


}

function Counter(){

  useEffect(function(){
    console.log("render")
  }, []);


  return <div>Counter </div>
}

export default App
