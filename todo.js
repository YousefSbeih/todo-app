document.querySelectorAll(".todo")[0].addEventListener(
  "mouseenter",
  () => {
    document.querySelector(".add-button").hidden = false;
  },
  { once: true }
);
const modalBg = document.querySelector(".modal-bg");
document.querySelector(".add-button").addEventListener("click", () => {
  modalBg.style.visibility = "visible";
});
