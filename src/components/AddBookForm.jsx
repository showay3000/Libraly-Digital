import React, { useState } from "react";

// Component for adding a new book
function AddBookForm({ addBook }) {
  // State variables to store form inputs
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload when form is submitted
    addBook({ title, author, genre }); // Calls the addBook function passed as a prop
    setTitle(""); // Clears the title input
    setAuthor(""); // Clears the author input
    setGenre(""); // Clears the genre input
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for book title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      
      {/* Input field for book author */}
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        required
      />

      {/* Input field for book genre */}
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
        required
      />

      {/* Submit button to add the book */}
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm; 
