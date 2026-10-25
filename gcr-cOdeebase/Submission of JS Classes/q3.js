// Q3: Library Management System
class Book {
  constructor(title, author, isbn, isIssued = false) { Object.assign(this, { title, author, isbn, isIssued }); }
  issueBook() { if (this.isIssued) return `${this.title} is already issued.`; this.isIssued = true; return `${this.title} has been issued.`; }
  returnBook() { if (!this.isIssued) return `${this.title} was not issued.`; this.isIssued = false; return `${this.title} has been returned.`; }
}
const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
  new Book("Clean Code", "Robert C. Martin", "ISBN102"),
  new Book("Atomic Habits", "James Clear", "ISBN103", true)
];
function displayAvailableBooks() {
  console.log("Available books:");
  books.filter(b => !b.isIssued).forEach(b => console.log(`${b.title} by ${b.author} (${b.isbn})`));
}
function issueBookByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  console.log(book ? book.issueBook() : `No book found with ISBN ${isbn}.`);
}
displayAvailableBooks();
issueBookByISBN("ISBN102");
displayAvailableBooks();
