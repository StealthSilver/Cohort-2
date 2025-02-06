function App() {
  return (
    <div>
      <PostComponent></PostComponent>
    </div>
  );
}

function PostComponent() {
  return(

  <div>
    <div
      style={{
        width: 200,
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        display: "flex",
      }}
    >
      <img
        src={
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwN0-cLq3vtAkGpSg6upZYLjRAbcu6ljrc5RZoXZkmoQObNT7szAUBgMCq8w6wMKDTNtvYb-4UFDGc470xr_BgCA"
        }
        style={{
          width: 25,
          height: 25,
          borderRadius: 20,
        }}
      ></img>

      <div>
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
