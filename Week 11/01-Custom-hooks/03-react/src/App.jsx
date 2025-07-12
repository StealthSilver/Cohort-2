import { useState, useEffect } from "react";

import "./App.css";
import { usePostTitle } from "./hooks/useFetch";

function App() {
  const postTitle = usePostTitle;

  return (
    <>
      <div>{post.title}</div>
    </>
  );
}

export default App;
