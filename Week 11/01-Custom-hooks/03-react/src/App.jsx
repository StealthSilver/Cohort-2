import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);

    useEffect(() => {
      getPosts();
    }, []);
  }

  return (
    <>
      <div>hi there</div>
    </>
  );
}

export default App;
