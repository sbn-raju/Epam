// Interface for a Book
interface Book {
id: number;
title: string;
author: string;
isAvailable: boolean;
}

// Interface for a Member
interface Member {
id: number;
name: string;
borrowedBooks: Book[];
}

// Class to represent a Library
class Library {
private books: Book[] = [];
private members: Member[] = [];

// Add a book to the library
addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
}

// Add a member to the library
addMember(member: Member): void {
    this.members.push(member);
    console.log(`Member "${member.name}" added.`);
}

// Member borrows a book
borrowBook(bookId: number, memberId: number): void {
    const book = this.books.find(b => b.id === bookId && b.isAvailable);
    const member = this.members.find(m => m.id === memberId);

    if (book && member) {
    book.isAvailable = false;
    member.borrowedBooks.push(book);
    console.log(`"${book.title}" borrowed by ${member.name}.`);
    } else {
    console.log("Book not available or member not found.");
    }
}

// Member returns a book
returnBook(bookId: number, memberId: number): void {
    const book = this.books.find(b => b.id === bookId);
    const member = this.members.find(m => m.id === memberId);

    if (book && member) {
    const index = member.borrowedBooks.findIndex(b => b.id === bookId);
    if (index !== -1) {
        member.borrowedBooks.splice(index, 1);
        book.isAvailable = true;
        console.log(`"${book.title}" returned by ${member.name}.`);
    } else {
        console.log(`${member.name} has not borrowed "${book?.title}".`);
    }
    } else {
    console.log("Book or member not found.");
    }
}

// Display available books
displayAvailableBooks(): void {
    console.log("\nAvailable Books:");
    this.books.filter(b => b.isAvailable).forEach(b => {
    console.log(`- ${b.title} by ${b.author}`);
    });
}

// Display borrowed books
displayBorrowedBooks(): void {
    console.log("\nBorrowed Books:");
    this.members.forEach(member => {
    if (member.borrowedBooks.length > 0) {
        console.log(`${member.name} borrowed:`);
        member.borrowedBooks.forEach(book => {
        console.log(`  - ${book.title} by ${book.author}`);
        });
    }
    });
}
}



//Testing the functions with the commands.
// console.log("All Bookings in the Libarary are: ", displayBorrowedBooks());//
// Sample books
const book1: Book = { id: 1, title: "1984", author: "George Orwell", isAvailable: true };
const book2: Book = { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true };
const book3: Book = { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true };

// Sample members
const member1: Member = { id: 1, name: "Alice", borrowedBooks: [] };
const member2: Member = { id: 2, name: "Bob", borrowedBooks: [] };

// Create a library instance
const library = new Library();

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
