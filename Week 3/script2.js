// delete functionality

let ctr = 1;
function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}

function addTodo() {
  // getting the input element

  const inputEl = document.querySelector("input");
  const value = inputEl.value;

  // creating and appending a new div
  // adding and appending the delete button
  const newDivEl = document.createElement("div");
  newDivEl.setAttribute("id", "todo-" + ctr);
  newDivEl.innerHTML =
    "<div>" +
    value +
    '<div><button onclick="deleteTodo(' +
    ctr +
    ')">delete</button>';

  document.querySelector("body").appendChild(newDivEl);
  ctr = ctr + 1;
}
