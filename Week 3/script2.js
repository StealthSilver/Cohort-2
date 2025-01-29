function addTodo() {
  // delete functionality
  let ctr = 1;
  function deleteTodo() {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
  }
  // getting the input element
  const inputEl = document.querySelector("input");
  const value = inputEl.value;

  // creating and appending a new div
  const newDivEl = document.createElement("div");
  newDivEl.innerHTML = value;

  document.querySelector("body").appendChild(newDivEl);

  // adding and appending the delete button
  const DelBtn = document.createElement("button");
  DelBtn.innerHTML = value;
  document.querySelector("body").appendChild(DelBtn);
}
