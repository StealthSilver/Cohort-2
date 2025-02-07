function App() {
  function focusOnInput() {}

  return (
    <div>
      Sign up
      <input id="name"></input>
      <input></input>
      <button onClick={focusOnInput}>submit</button>
    </div>
  );
}

export default App;
