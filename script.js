const myLibrary = [
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    pages: 181,
    read: true,
  },
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  const title = document.querySelector("#book-title").value;
  const author = document.querySelector("#book-author").value;
  const pages = document.querySelector("#book-pages").value;
  const read = document.querySelector("#book-read-status").checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBook();
  clearInput();
}

function displayBook() {
  const getLastBook = myLibrary.length - 1;
  for (let i = getLastBook; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const cardMiddleRow = document.createElement("div");
    const author = document.createElement("div");
    const authorName = document.createElement("span");
    const pages = document.createElement("div");
    const pageNum = document.createElement("span");
    const status = document.createElement("div");
    const statusRn = document.createElement("span");
    const cardLastRow = document.createElement("div");
    const statusChangeBtn = document.createElement("button");
    const statusChangeBtnStatus = document.createElement("span");
    const remove = document.createElement("div");
    const image = document.createElement("img");
    card.classList.add("card");
    title.classList.add("title");
    title.textContent = myLibrary[i].title;
    cardMiddleRow.classList.add("card-middle-row");
    author.classList.add("author");
    author.textContent = "By: ";
    authorName.classList.add("author-name");
    authorName.textContent = myLibrary[i].author;
    pages.classList.add("pages");
    pages.textContent = "Pages: ";
    pageNum.classList.add("page-num");
    pageNum.textContent = myLibrary[i].pages;
    status.classList.add("status");
    status.textContent = "Status: ";
    statusRn.classList.add("status-rn");
    if (myLibrary[i].read) statusRn.textContent = "Read";
    else statusRn.textContent = "Unread";
    cardLastRow.classList.add("card-last-rw");
    statusChangeBtn.classList.add("status-change-btn");
    statusChangeBtn.textContent = "Mark as ";
    statusChangeBtnStatus.classList.add("status-change-btn-status");
    if (statusRn.textContent == "Read") statusChangeBtnStatus.textContent = "Unread";
    else statusChangeBtnStatus.textContent = "Read";
    remove.classList.add("remove-card");
    image.src = "./Assets/delete.svg";
    image.alt = "remove";
    card.appendChild(title);
    card.appendChild(cardMiddleRow);
    cardMiddleRow.appendChild(author);
    author.appendChild(authorName);
    cardMiddleRow.appendChild(pages);
    pages.appendChild(pageNum);
    cardMiddleRow.appendChild(status);
    status.appendChild(statusRn);
    card.appendChild(cardLastRow);
    cardLastRow.appendChild(statusChangeBtn);
    statusChangeBtn.appendChild(statusChangeBtnStatus);
    cardLastRow.appendChild(remove);
    remove.appendChild(image);
    document.querySelector(".content").appendChild(card);
    statusChangeBtn.addEventListener("click", () => {
      if (statusRn.textContent == "Read") {
        statusChangeBtnStatus.textContent = "Read";
        statusRn.textContent = "Unread";
        myLibrary[i].read = false;
      } else {
        statusChangeBtnStatus.textContent = "Unread";
        statusRn.textContent = "Read";
        myLibrary[i].read = true;
      }
    });
    remove.addEventListener("click", () => {
      const cardRemove = remove.closest(".card");
      cardRemove.remove();
      myLibrary.splice(i, 1);
    });
  }
}

displayBook();

function clearInput() {
  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-pages").value = "";
  document.querySelector("#book-read-status").checked = false;
}

const addNewBookBtn = document.querySelector(".new-book-btn");
const dialogBox = document.querySelector("dialog");
const cancel = document.querySelector("#cancel");
const submit = document.querySelector("#submit-form");

addNewBookBtn.addEventListener("click", () => {
  dialogBox.showModal();
});

cancel.addEventListener("click", (e) => {
  e.preventDefault();
  dialogBox.close();
  clearInput();
});

submit.addEventListener("click", () => {
  const inputs = dialogBox.querySelectorAll("input[type='text'], input[type='number']");
  const isEmpty = [...inputs].some((input) => input.value.trim() === "");
  if (isEmpty) return;
  addBookToLibrary();
  dialogBox.close();
});
