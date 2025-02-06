


function App() {
 

  return (
  <div>
    <Card innerContent = {"hi there"}/>
  </div>
  )


}

function Card({innerContent}){
  return <span style = {{background: "black", borderRadius: 10, color: "white"}}>{innerContent}</span>
}




export default App
