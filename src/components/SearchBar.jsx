import React from "react";

// The SearchBar component receives two props: searchTerm and setSearchTerm
function SearchBar({ searchTerm, setSearchTerm }) {
  
  // handleChange is a function that updates the searchTerm when the input value changes
  const handleChange = (e) => {
    setSearchTerm(e.target.value);  // Updates the searchTerm with the new input value
  };

  return (
    <div>
      <h2>Search Books</h2>  {/* Displays the title "Search Books" */}
      
      <input
        type="text"  // This defines an input field where users can type
        value={searchTerm}  // The input field's value is controlled by the searchTerm state
        onChange={handleChange}  // Calls handleChange every time the user types in the input field
        placeholder="Search by title or genre"  // Displays a hint text inside the input field
      />
    </div>
  );
}

export default SearchBar;  
