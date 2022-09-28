import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../Styles/Container.css";
import { useStateProvider } from "../utils/stateProvider";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { reducerCases } from "../utils/constants";

function Blast() {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        name: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);
  useEffect(() => {
    const getPlaybackState = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: data.is_playing,
      });
    };
    getPlaybackState();
  }, [dispatch, token]);
  return (
    <div className="Blast">
      <div className="background"></div>
      <div className="blastBody">
        <Sidebar />
        <div className="body" ref = {bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground}/>
          <div className="bodyContents">
            <Body headerBackground ={headerBackground}/>
          </div>
        </div>
      </div>

      <div className="blastFooter">
        <Footer />
      </div>
    </div>
  );
}

export { Blast };
