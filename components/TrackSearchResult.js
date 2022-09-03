// TrackSearchResult.js

// A track search result component, for search list

// Modules:

import React from "react";
import { AiFillPlayCircle, AiOutlinePause, AiOutlinePlayCircle, AiOutlinePlus } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { playbackState, currentTrackState } from "./../atoms/playerAtom";

// Code:

function TrackSearchResult({ track })
{
  // Recoil State

  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);
  const [playback, setPlayback] = useRecoilState(playbackState);

  // Handler

  function handlePlay()
  {
    setCurrentTrack(track);
    console.log(track);

    if (track.uri == currentTrack.uri) setPlayback(!playback);
  }


  // Component Render

  return (
    <div className="flex items-center justify-between space-x-20 cursor-pointer hover:bg-white/10 py-2 group transition ease-out">
      <img 
        src={track.albumArt}
        className="rounded-xl h-16 w-16 object-cover mr-3" />

      <div className="">
        <div className="text-neutral-200 truncate w-[550px]">{track.title}</div>
        <div className="text-neutral-400">{track.artist}</div>
      </div>

      <div className="md:ml-auto flex items-center space-x-2.5">
        {track.uri == currentTrack.uri && playback ? (
          <AiOutlinePause 
            className="sidebarIcon"
            onClick={handlePlay} />
        ) : (
          <AiOutlinePlayCircle
            className="sidebarIcon"
            onClick={handlePlay} />
        )}      
        <AiOutlinePlus className="sidebarIcon" />
      </div>
    </div>
  )
}

export default TrackSearchResult;

// TrackSearchResult.js ends here