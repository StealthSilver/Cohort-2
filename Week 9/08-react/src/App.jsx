import {useEffect , useState} from "react";

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  function increaseCount() {
    setCount(currentValue => currentValue + 1);
  }

  function decreaseCount() {
    setCount2(currentValue => currentValue - 1);
  }

  // this code will only run on mount and not on every render
  useEffect(()=> {
    const increaseInterval = setInterval(increaseCount, 3000);
    const decreaseInterval = setInterval(decreaseCount, 4000);

    // Cleanup function to clear intervals on unmount
    return () => {
      clearInterval(increaseInterval);
      clearInterval(decreaseInterval);
      console.log("Intervals cleared on unmount.");
    };
  }, []);  
  // this effect will run only on mount, because the array is empty

  useEffect(()=> {
    console.log("the count has been updated to " + count);
  }, [count ,count2]);  
  // this effect will run every time the count2 changes as there is the variable in the dependency array

  return (
    <div>
      {count} {count2}
    </div>
  );
}

export default App;
