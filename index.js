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
function displayBooksOnCards() {
  // Clear duplicate cards
  cardContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const cardItem = document.createElement("div");
    cardItem.className = "book-card";
    cardItem.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}`;
    cardContainer.appendChild(cardItem);
  });
}

//Button functionality
showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

submitFormButton.addEventListener("click", () => {
  dialog.close();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

addBookToLibrary();
