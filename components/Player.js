// Player.js

// A music player applet component

// Modules:

import React, { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";
import { BiShuffle } from "react-icons/bi";
import { BsFillSkipStartFill, BsFillPlayFill, BsFillSkipEndFill } from "react-icons/bs";
import { IoRepeatOutline } from "react-icons/io5";
import { RiPlayList2Fill, RiComputerLine } from "react-icons/ri";
import { MdOutlineSpeaker } from "react-icons/md";
import { FiVolume2 } from "react-icons/fi";
import { CgArrowsExpandRight } from "react-icons/cg";

import { currentTrackState, playbackState } from "../atoms/playerAtom";

// Code:

function Player({ accessToken, trackUri })
{
  // Recoil State

  const [playback, setPlayback] = useRecoilState(playbackState);
  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);

  // Component Hooks

  useEffect(function() {
    if (trackUri) setPlayback(true);
  }, [trackUri]);

  // Component Render
  if (!accessToken) return null;
  return (
    <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#155e75",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#fff",
          trackArtistColor: "#a3a3a3",
          trackNameColor: "#fff",
          height: "70px",
          sliderTrackColor: "#a3a3a3",
          sliderTrackBorderRadius: "4px",
          sliderHandleColor: "#fff",
          errorColor: "#fff",
        }}
        token={accessToken}
        callback={(state) => {
          setPlayback(state.isPlaying);
        }}
        play={playback}
        uris={trackUri ? [trackUri] : []}
        magnifySliderOnHover={true}
        autoPlay={true}
      />
  );
}

export default Player;

// Player.js ends here