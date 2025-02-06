import {useState} from "react";


function App() {
 

  return (
    <div style = {{background: "#dfe6e9" , height: "100vh"}}>
      <ToggleMessage></ToggleMessage>
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible , setIsVisible] = useState(false); // defining a new state variable

// when the value of a state variable changes, the component that uses that state re-renders
  return(
    <div>
      <button onClick = {()=> setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  )
}

export default App
