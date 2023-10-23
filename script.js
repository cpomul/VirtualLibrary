const bookForm = document.querySelector("#bookForm");
const bookList = document.querySelector("#bookList");
const showDialogButton = document.querySelector("#showDialogButton");
const closeFormButton = document.querySelector("#closeFormButton");
const dialog = document.querySelector("#dialog");
const closeDialog = document.querySelector("#closeDialog");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;

    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
  });
}
// this should be updated on each new object added to myLibrary[]
function displayBooksOnCards() {}

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

closeFormButton.addEventListener("click", () => {
  dialog.close();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

addBookToLibrary();
