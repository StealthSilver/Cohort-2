function App() {
  return (
    <div style = {{backgroundColor: "#dfe6e9" , height: "100vh"}}>
      <div style={{display: "flex" , justifyContent: "center"}}>
      <PostComponent></PostComponent></div>
    </div>
  );
}

function PostComponent() {
  return(

  <div  style={{
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20
   
    
  }}>
    <div style = {{display: "flex"}}
     
    >
      <img
        src={
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwN0-cLq3vtAkGpSg6upZYLjRAbcu6ljrc5RZoXZkmoQObNT7szAUBgMCq8w6wMKDTNtvYb-4UFDGc470xr_BgCA"
        }
        style={{
          width: 35,
          height: 35,
          borderRadius: 20,
        }}
      ></img>

      <div style = {{fontSize:14 , marginLeft: 10}}>
        <b>GADHA</b>
        <div>23,482 followers</div>
        <div>12m</div>
      </div>
    </div>

    <div>
      Want to know how to win big? check out how these folks won $6000 in
      bounties
    </div>
  </div>)
}

export default App;
