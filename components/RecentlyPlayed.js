import { useState } from "react";
import { useRecoilState } from "recoil";
import { playbackState, currentTrackState } from "./../atoms/playerAtom";

function RecentlyPlayed({track}){

    const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);
    const [playback, setPlayback] = useRecoilState(playbackState);

    function handlePlay()
    {
      setCurrentTrack(track);
      console.log(track);
  
      if (track.uri == currentTrack.uri) setPlayback(!playback);
    }

    return(
        <div className="flex items-center space-x-3" onClick={handlePlay}>
            <img
            src={track.albumUrl}
            alt=""
            className="rounded-full w-[52px] h-[52px]"
        />
        <div>
            <h4 className="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-[150px]">
                {track.title}
            </h4>
            <p className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
                {track.artist}
            </p>
        </div>

        </div>
        
    )
}

export default RecentlyPlayed;