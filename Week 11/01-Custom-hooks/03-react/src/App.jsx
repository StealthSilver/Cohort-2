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
  }

  // getPost is written in the useEffect as if the dependency array is empty the function written inside the useEffect is called as soon as the App component mounts
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div>{post.title}</div>
    </>
  );
}

export default App;
