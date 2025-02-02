import React from "react";

// BookList component receives a list of books as a prop
function BookList({ books }) {
  return (
    <div className="book-list">  {/* A container for the list of books */}
      
      {/* Loop through the books array and display each book */}
      {books.map((book) => (
        <div key={book.id} className="book">  {/* Each book is displayed inside a div with a unique key */}
          <h2>{book.title}</h2>  {/* Display the book's title */}
          <p>Author: {book.author}</p>  {/* Display the book's author */}
          <p>Genre: {book.genre}</p>  {/* Display the book's genre */}
        </div>
      ))}
    </div>
  );
}

export default BookList;  
