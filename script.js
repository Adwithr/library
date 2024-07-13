const addNewBookBtn = document.querySelector(".new-book-btn");
const dialogBox = document.querySelector("dialog");
const cancel = document.querySelector("#cancel");

addNewBookBtn.addEventListener("click", () => {
  dialogBox.showModal();
});

cancel.addEventListener("click", () => {
  dialogBox.close();
});
