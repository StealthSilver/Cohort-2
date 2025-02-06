function App() {
  return (
    <div style = {{display : "flex"}}>
      
      <Card><div style = {{color : "green"}}>what do you want to post <br /><br /> <input></input> </div> </Card> 
      <Card>"hi there"</Card> 
    </div>
  );
}

function Card({ children}) {
  return (
    <div style={{ background: "black", borderRadius: 10, color: "white", padding: 10 , margin: 10 }}>
      {children}
    </div>
  );
}

export default App;
