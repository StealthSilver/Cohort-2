import "./App.css";

function App() {
  return <></>;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <Increaa></Increaa>
      <Decrease></Decrease>
    </div>
  );
}

function Increase() {
  return (
    <div>
      <button>Increase</button>
    </div>
  );
}

function Decrease() {
  return (
    <div>
      <button>Decrease</button>
    </div>
  );
}

export default App;
