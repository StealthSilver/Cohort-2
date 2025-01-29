function addTodo() {
  const inputEl = document.querySelector("input"); // getting the input element
  const value = inputEl.value;

  const newDivEl = document.createElement("div");
  newDivEl.innerHTML = value;

  document.querySelector("body").appendChild(newDivEl);
}
