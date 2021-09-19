// add task button when hover
document.querySelectorAll(".todo")[0].addEventListener(
  "mouseenter",
  () => {
    document.querySelector(".add-button").hidden = false;
  },
  { once: true }
);
// modal visibility
const modalBg = document.querySelector(".modal-bg");
document.querySelector(".add-button").addEventListener("click", () => {
  modalBg.style.visibility = "visible";
});
document.querySelector(".cancel-button").addEventListener("click", () => {
  modalBg.style.visibility = "hidden";
});
//-------------------------------------------------------------------------------------

//---------------- create task div and return id -------------------------------------
const createTask = (formData) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("todo-todos");

  const h1 = document.createElement("h1");
  h1.innerHTML = formData.taskName;

  const cloumnFlex = document.createElement("div");
  cloumnFlex.className = "todos-cloumn-flex";
  const h2 = document.createElement("h2");
  const h6 = document.createElement("h6");
  h2.innerHTML = formData.taskSeverity;
  h6.innerHTML = formData.TaskDate;
  cloumnFlex.appendChild(h2);
  cloumnFlex.appendChild(h6);

  taskDiv.appendChild(h1);
  taskDiv.appendChild(cloumnFlex);

  if (formData.taskSeverity === "normal") {
    taskDiv.classList.add("normal-div");
    h2.classList.add("normal-h2");
  } else if (formData.taskSeverity === "important") {
    taskDiv.classList.add("important-div");
    h2.classList.add("important-h2");
  } else if (formData.taskSeverity === "urgent") {
    taskDiv.classList.add("urgent-div");
    h2.classList.add("urgent-h2");
  }
  taskDiv.setAttribute("draggable", "true");

  return taskDiv;
};
// get data from form
const todoForm = document.querySelector("form");
const submitInput = todoForm.querySelector('button[type="submit"]');
todoForm.onsubmit = (e) => {
  const currentDate = new Date().getTime();
  e.preventDefault();
  const formData = new FormData(todoForm);
  const data = {
    taskName: formData.get("name"),
    TaskDescription: formData.get("description"),
    taskSeverity: formData.get("severity"),
    TaskDate: currentDate.toLocaleString("en-US"),
  };
  const todoDiv = document.querySelector(".todos-with-button");
  todoDiv.prepend(createTask(data));
  modalBg.style.visibility = "hidden";
};
