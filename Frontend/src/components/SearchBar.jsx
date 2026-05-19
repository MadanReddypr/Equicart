function SearchBar({
  searchTerm,
  setSearchTerm
}) {

  return (

    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e)=>
        setSearchTerm(
          e.target.value
        )
      }
      className="w-full border p-3 rounded mb-5"
    />

  );

}

export default SearchBar;