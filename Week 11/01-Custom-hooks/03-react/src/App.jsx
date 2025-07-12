import "./App.css";
import { useState, useEffect } from "react";

import { usePostTitle } from "./hooks/usePostTitle";

function App() {
  const postTitle = usePostTitle();

  return (
    <>
      <div>{postTitle}</div>
    </>
  );
}

export default App;
