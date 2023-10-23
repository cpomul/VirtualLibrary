const bookForm = document.querySelector("#bookForm");
const bookList = document.querySelector("#bookList");

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
addBookToLibrary();
