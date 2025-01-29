function addTodo() {
  // getting the input element
  const inputEl = document.querySelector("input");
  const value = inputEl.value;

  // creating and appending a new div
  const newDivEl = document.createElement("div");
  newDivEl.innerHTML = value;
  document.querySelector("body").appendChild(newDivEl);
}
