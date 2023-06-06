// DOM elements:

const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const finishedStatusInput = document.querySelector(".finished-status-input");

const bookInfoDisplayList = document.querySelector(".book-info-display-list");
const bookInfo = document.querySelector(".book-info");

const addBookForm = document.querySelector(".add-book-form");

const rmBtn = document.querySelector(".rmbtn");

// Functions:

let myLibrary = [];

// new book constructor
function Book(title, author, finishedStatus) {
  this.title = title;
  this.author = author;
  this.finishedStatus = finishedStatus;
}

// adds info from newly created book to library list
function displayNewBook(newBook, index) {
  let newBookInfoEntry = document.createElement("li");
  let newBookInfo = document.createElement("ul");
  let newTitleDisplay = document.createElement("li");
  let newAuthorDisplay = document.createElement("li");
  let newFinishedStatusDisplay = document.createElement("li");
  let newRmBtn = document.createElement("button");
  const bookID = createBookID(index);
  newBookInfoEntry.setAttribute("id", bookID);

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
  newRmBtn.addEventListener("click", function () {
    removeBook(bookID);
  });

  newTitleDisplay.innerHTML = "Title: " + newBook.title;
  newAuthorDisplay.innerHTML = "Author: " + newBook.author;
  newFinishedStatusDisplay.innerHTML = "Finished? " + newBook.finishedStatus;
}

// adds newly created book object to myLibrary array
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

// idenfifies each book
function createBookID(index) {
  return "book-" + index;
}

// remove book element from DOM and myLibrary
function removeBook(bookID) {
  const bookIndex = parseInt(bookID.split("-")[1]);
  myLibrary.splice(bookIndex, 1);
  const bookElement = document.getElementById(bookID);
  bookElement.remove();
}

// form submit action: construct new book object, add it to library, post it to library list
addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let newBook = new Book(
    titleInput.value,
    authorInput.value,
    finishedStatusInput.value
  );
  addBookToLibrary(newBook);
  displayNewBook(newBook, myLibrary.length - 1);

  titleInput.value = null;
  authorInput.value = null;
  finishedStatusInput.value = null;
});
