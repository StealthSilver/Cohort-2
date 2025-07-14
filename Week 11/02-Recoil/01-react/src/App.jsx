import "./App.css";

function App() {
  return <></>;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      {/* passing setCount as props */}
      <Increaa setCount={setCount}></Increaa>
      <Decrease setCount={setCount}></Decrease>
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
