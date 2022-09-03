// playerAtom.js

// Modules:

import { atom } from "recoil";

// Code:

const playbackState = atom({
  key: "playbackState",
  default: false
});

const currentTrackState = atom({
  key: "currentTrackState",
  default: ""
});

export { playbackState, currentTrackState }

// playerAtom.js ends here