 import React, { useState } from "react";


 const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search logic here with searchTerm
  };

  return (
    <form  className='SearchBar'Submit={handleSubmit}>
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;






