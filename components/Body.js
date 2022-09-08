import React, { useEffect } from "react";
import axios from "axios";
import "../Styles/Body.css";
import { AiFillClockCircle } from "react-icons/ai";
import { useStateProvider } from "../utils/stateProvider";
import { reducerCases } from "../utils/Constants";
function Body() {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };
    getInitialPlaylist();
  });
  return <div className='Body'></div>;
}

export { Body };
