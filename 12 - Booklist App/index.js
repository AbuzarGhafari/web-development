// HTML Elements
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let isbn = document.querySelector("#isbn");
let submitBtn = document.querySelector("#submit");
// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="edit-btn">Edit</a></td>
      <td><a href="#" class="delete-btn">X</a></td>
      `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete-btn")) {
      el.parentElement.parentElement.remove();
      // Show Success Message
      UI.showAlert("Book Deleted", "success");
      // Remove book from store
      Store.removeBook(el.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
  }
  static updateBook(el){
    if (el.classList.contains("edit-btn")) {
      title.value = el.parentElement.parentElement.children[0].textContent;
      author.value = el.parentElement.parentElement.children[1].textContent;
      isbn.value = el.parentElement.parentElement.children[2].textContent;
      submitBtn.value = 'Update Book';
      el.parentElement.parentElement.remove(); 
      // Remove book from store
      Store.removeBook(el.parentElement.previousElementSibling.textContent);
    
      // el.parentElement.parentElement.remove();
      // Show Success Message
      // UI.showAlert("Book Deleted", "success");
      // // Remove book from store
      // Store.removeBook(el.parentElement.previousElementSibling.textContent);
    }
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".booklist-container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
  static clearFields() {
    title.value = "";
    author.value = "";
    isbn.value = "";
  }
}
// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent actual submit
  e.preventDefault();
  // Validate
  if (title.value === "" || author.value === "" || isbn.value === "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    // Instantiate Book
    const book = new Book(title.value, author.value, isbn.value);
    // Add Book to UI
    UI.addBookToList(book);
    // Add book to store
    Store.addBook(book);
    // Clear Fields
    UI.clearFields();
    // Show Success Message
    if(submitBtn.value === 'Add Book'){
      UI.showAlert("Book Added", "success");
    }else if(submitBtn.value === 'Update Book'){  
       UI.showAlert("Book Updated", "success"); 
    }
  }
});



document.querySelector("#book-list").addEventListener("click", (e) => {
  // Event: Remove a Book
  UI.deleteBook(e.target);
  // Event: Edit a Book 
  UI.updateBook(e.target);
});
