import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import SearchBar from "./components/SearchBar";

// Initial data for the library
const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new book
  const addBook = (newBook) => {
    const book = { id: books.length + 1, ...newBook };
    setBooks([...books, book]);
  };

  // Filter books based on the search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>my Library</h1>

      {/* Search Bar Component */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Book List Component */}
      <BookList books={filteredBooks} />

      {/* Add Book Form Component */}
      <AddBookForm addBook={addBook} />
    </div>
  );
}

export default App;
