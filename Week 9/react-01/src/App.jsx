function App() {
  return (
    <div>
      <b>Hi there</b>
      <Counter></Counter>
    </div>
  );
}

function Counter() {

  const [count , setCount] = useState(0);

  function increaseCount(){
    count = count + 1;
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick  = {increaseCount}>Increase Count</button>
    </div>
  );
}

export default App;
