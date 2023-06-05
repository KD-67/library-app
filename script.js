// DOM elements:

const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const finishedStatusInput = document.querySelector(".finished-status-input");

const bookInfoDisplayList = document.querySelector(".book-info-display-list");
const bookInfo = document.querySelector(".book-info");

const addBookForm = document.querySelector(".add-book-form");

// Functions:

let myLibrary = [];

// new book constructor
function Book(title, author, finishedStatus) {
  this.title = title;
  this.author = author;
  this.finishedStatus = finishedStatus;
}

// adds info from newly created book to library list
function displayNewBook(newBook) {
  let newBookInfoEntry = document.createElement("li");
  let newBookInfo = document.createElement("ul");
  let newTitleDisplay = document.createElement("li");
  let newAuthorDisplay = document.createElement("li");
  let newFinishedStatusDisplay = document.createElement("li");
  let newRmBtn = document.createElement("button");

  newTitleDisplay.textContent = newBook.title;
  newAuthorDisplay.textContent = newBook.author;
  newFinishedStatusDisplay.textContent = newBook.finishedStatus;

  bookInfoDisplayList.appendChild(newBookInfoEntry);
  newBookInfoEntry.appendChild(newBookInfo);
  newBookInfo.appendChild(newTitleDisplay);
  newBookInfo.appendChild(newAuthorDisplay);
  newBookInfo.appendChild(newFinishedStatusDisplay);
  newBookInfoEntry.appendChild(newRmBtn);
  newRmBtn.innerHTML = "Remove";

  newTitleDisplay.innerHTML = "Title: " + newBook.title;
  newAuthorDisplay.innerHTML = "Author: " + newBook.author;
  newFinishedStatusDisplay.innerHTML =
    "Finished Status: " + newBook.finishedStatus;
}

// adds newly created book object to myLibrary array
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

// form submit action: construct new book object, add it to library, post it to library list
addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let book1 = new Book(
    titleInput.value,
    authorInput.value,
    finishedStatusInput.value
  );
  addBookToLibrary(book1);
  displayNewBook(book1);
});
