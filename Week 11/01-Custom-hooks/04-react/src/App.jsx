import { useState } from "react";

import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { finalData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/3"
  );

  return <div>{JSON.stringify(finalData)}</div>;
}

export default App;
