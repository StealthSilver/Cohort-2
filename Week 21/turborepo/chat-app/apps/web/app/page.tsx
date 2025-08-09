export default function Home(){
  return (
    <div style = {{
      height: "100vh",
      width : "100vw",
      background: "black",
      display : "flex",
      justifyItems: "center",
      justifyContent: "center"
    }}>
      <div style = {{
      display: "flex",
      justifyItems: "center",
      justifyContent: "column"
    }}>
      <input type="text" />
      <button>Join room</button>
    </div></div>
  )
}