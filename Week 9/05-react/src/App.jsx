import {useState} from "react";


function App() {
 

  return (
    <div style = {{background: "#dfe6e9" , height: "100vh"}}>
      <ToggleMessage></ToggleMessage>
    </div>
  )
}

const ToggleMessage = () => {
  const [isVisible , setIsVisible] = useState(false);


  return(
    <div>
      <button oClick = {()=> setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered</p>}
    </div>
  )
}

export default App
