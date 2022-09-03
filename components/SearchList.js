// SearchList.js

// A search results component

// Modules:

import React, { useEffect } from "react";

import TrackSearchResult from "./TrackSearchResult";

// Code:

function SearchList({ searchResults })
{

  return (
    <div className="flex flex-col flex-grow-1 w-6/12 max-w-[1150px] h-4/6 my-2 border-2 border-neutral-400 rounded-lg overflow-y-scroll p-2">
      {searchResults.map(function(track) {
        return (
          <TrackSearchResult track={track} key={track.uri} />
        );
      })}
    </div>
  );
}

export default SearchList;

// SearchList.js ends here