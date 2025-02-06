function App() {
  return (
    <div style = {{display : "flex"}}>
      
      <Card innerContent={<div style = {{color : "green"}}>what do you want to post <br /><br /> <input></input> </div> }/>
      <Card innerContent={"hi there"} />
    </div>
  );
}

function Card({ innerContent }) {
  return (
    <div style={{ background: "black", borderRadius: 10, color: "white", padding: 10 , margin: 10 }}>
      {innerContent}
    </div>
  );
}

export default App;
