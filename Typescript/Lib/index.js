// Class to represent a Library
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    // Add a book to the library
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Book \"".concat(book.title, "\" added to the library."));
    };
    // Add a member to the library
    Library.prototype.addMember = function (member) {
        this.members.push(member);
        console.log("Member \"".concat(member.name, "\" added."));
    };
    // Member borrows a book
    Library.prototype.borrowBook = function (bookId, memberId) {
        var book = this.books.find(function (b) { return b.id === bookId && b.isAvailable; });
        var member = this.members.find(function (m) { return m.id === memberId; });
        if (book && member) {
            book.isAvailable = false;
            member.borrowedBooks.push(book);
            console.log("\"".concat(book.title, "\" borrowed by ").concat(member.name, "."));
        }
        else {
            console.log("Book not available or member not found.");
        }
    };
    // Member returns a book
    Library.prototype.returnBook = function (bookId, memberId) {
        var book = this.books.find(function (b) { return b.id === bookId; });
        var member = this.members.find(function (m) { return m.id === memberId; });
        if (book && member) {
            var index = member.borrowedBooks.findIndex(function (b) { return b.id === bookId; });
            if (index !== -1) {
                member.borrowedBooks.splice(index, 1);
                book.isAvailable = true;
                console.log("\"".concat(book.title, "\" returned by ").concat(member.name, "."));
            }
            else {
                console.log("".concat(member.name, " has not borrowed \"").concat(book === null || book === void 0 ? void 0 : book.title, "\"."));
            }
        }
        else {
            console.log("Book or member not found.");
        }
    };
    // Display available books
    Library.prototype.displayAvailableBooks = function () {
        console.log("\nAvailable Books:");
        this.books.filter(function (b) { return b.isAvailable; }).forEach(function (b) {
            console.log("- ".concat(b.title, " by ").concat(b.author));
        });
    };
    // Display borrowed books
    Library.prototype.displayBorrowedBooks = function () {
        console.log("\nBorrowed Books:");
        this.members.forEach(function (member) {
            if (member.borrowedBooks.length > 0) {
                console.log("".concat(member.name, " borrowed:"));
                member.borrowedBooks.forEach(function (book) {
                    console.log("  - ".concat(book.title, " by ").concat(book.author));
                });
            }
        });
    };
    return Library;
}());
//Testing the functions with the commands.
// console.log("All Bookings in the Libarary are: ", displayBorrowedBooks());//
// Sample books
var book1 = { id: 1, title: "1984", author: "George Orwell", isAvailable: true };
var book2 = { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true };
var book3 = { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true };
// Sample members
var member1 = { id: 1, name: "Alice", borrowedBooks: [] };
var member2 = { id: 2, name: "Bob", borrowedBooks: [] };
// Create a library instance
var library = new Library();
// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
// Add members to the library
library.addMember(member1);
library.addMember(member2);
// Display available books
library.displayAvailableBooks();
// Member borrows a book
library.borrowBook(1, 1); // Alice borrows "1984"
library.borrowBook(2, 2); // Bob borrows "To Kill a Mockingbird"
// Display available books after borrowing
library.displayAvailableBooks();
// Display borrowed books
library.displayBorrowedBooks();
// Try to borrow an already borrowed book
library.borrowBook(1, 2); // Bob tries to borrow "1984" (already borrowed)
// Return a book
library.returnBook(1, 1); // Alice returns "1984"
// Try to return a book not borrowed
library.returnBook(3, 1); // Alice tries to return "The Great Gatsby" which she didn't borrow
// Display available books after return
library.displayAvailableBooks();
// Final borrowed books status
library.displayBorrowedBooks();
