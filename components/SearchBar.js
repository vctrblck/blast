// SearchBar.js

// A search bar component.js

// Modules:

import React from "react";

// Code:

function SearchBar({ search, setSearch })
{
  // Component Render

  return (
    <div className="w-6/12 max-w-[1150px] flex flex-row rounded-full overflow-hidden border-2 border-[#999999] p-1.5 px-5 pr-8 items-center">
      <div className="h-4 w-4 border-2 flex-shrink-0 rounded-full border-[#999999]" />
      <input 
        type="text"
        value={search}
        placeholder="Find some tunes..."
        onChange={(e) => setSearch(e.target.value)}
        className="bg-cyan-900 border-none text-neutral-400 lg:w-full focus:ring-0 outline-none placeholder:text-neutral-400 ml-4" />
    </div>
  );
}

export default SearchBar;

// SearchBar.js ends here