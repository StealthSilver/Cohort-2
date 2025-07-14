// this is drilling down the props to achieve the coutner functionality, this will have a lot of re-renders ans is the unoptimal method

import "./App.css";

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  );
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

function Increase({ setCount }) {
  function increase() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <button>Increase</button>
    </div>
  );
}

function Decrease({ setCount }) {
  function decrease() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <button>Decrease</button>
    </div>
  );
}

export default App;
