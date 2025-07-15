import "./App.css";
import { RecoilRoot, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  // it will keep leading until the todo is returned from the backend
  if (todo.state === "loading") {
    return <div>loading...</div>;
  }

  return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  );
}

export default App;
