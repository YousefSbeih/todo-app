const containers = document.querySelectorAll(".todo");
console.log(containers);
containers.forEach((cont) => {
  cont.addEventListener("mouseenter", () => {
    const dragTask = document.querySelectorAll(".todo-todos");
    dragTask.forEach((todo) => {
      todo.addEventListener("dragstart", () => {});
    });
  });
});
containers.forEach((cont) => {
  cont.addEventListener("dragover", () => {
    const task = document.querySelectorAll(".todo-todos");
    cont.appendChild(task[0]);
  });
});
