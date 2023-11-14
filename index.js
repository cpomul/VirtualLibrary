const bookForm = document.querySelector("#bookForm");
const bookList = document.querySelector("#bookList");
const showDialogButton = document.querySelector("#showDialogButton");
const submitFormButton = document.querySelector("#submitFormButton");
const dialog = document.querySelector("#dialog");
const closeDialog = document.querySelector("#closeDialog");
const cardContainer = document.querySelector(".cardContainer");

const myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function addBookToLibrary() {
  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;

    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    displayBooksOnCards();
  });
}

function createCard(book) {
  const cardItem = document.createElement("div");
  cardItem.className = "book-card";
  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.type = "button";
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", () => {
    removeBookFromLibrary(book);
    displayBooksOnCards();
  });

  cardItem.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}`;
  cardItem.appendChild(deleteButton);
  cardContainer.appendChild(cardItem);
}

function displayBooksOnCards() {
  clearCardContainer();

  myLibrary.forEach((book) => {
    createCard(book);
  });
}

function clearCardContainer() {
  cardContainer.innerHTML = "";
}

function removeBookFromLibrary(book) {
  const index = myLibrary.indexOf(book);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}

function openDialog() {
  dialog.showModal();
}

function closeDialogBox() {
  dialog.close();
}

// Button functionality
showDialogButton.addEventListener("click", openDialog);
submitFormButton.addEventListener("click", closeDialogBox);
closeDialog.addEventListener("click", closeDialogBox);

addBookToLibrary();
