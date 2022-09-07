// song.test.js

// Modules:

import { render } from "@testing-library/react";

import SongPage from "./../pages/song";

// Code:

describe("Song Page", function() {
  it("...renders the song page", function() {
    render(<SongPage />);
  });
})

// song.test.js ends here