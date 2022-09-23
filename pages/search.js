// search.js

// A music search page

// Modules:

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilState } from "recoil";
import axios from "axios";

import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import SearchList from "../components/SearchList";
import Player from "./../components/Player";
import { currentTrackState } from "../atoms/playerAtom";
import Track from "../components/Track";
import NewReleases from "../components/NewReleases";

// Code:

const api = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID
});

function SearchPage()
{
  const router = useRouter();
  const { data: session } = useSession();

  // Recoil State

  const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);

  // Component State

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const[getNewReleases,setNewReleases]= useState([]);
  const [displayPlayer, setDisplayPlayer] = useState(false);
  const [lyrics, setLyrics] = useState(""); 

  // Component Hooks

  //search
  useEffect(function() {
    if (!session) router.push("/auth/login");

    if (!search) return setSearchResults([]);

    api.setAccessToken(session.accessToken);

    api.searchTracks(search).then(function(results) {
      setSearchResults(
        results.body.tracks.items.map(function(track) {
          //get the smallest image
          const smallest = track.album.images.reduce(function(smallest, image) {
            if (image.height < smallest.height) return image;
            return smallest;
          }, track.album.images[0]);
    
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumArt: smallest.url
          }
        })
      )
    })
  }, [search, session]);

  //new Releases
  useEffect(()=> {
    //if (!session) router.push("/auth/login");

    if (!session) return;
    api.setAccessToken(session.accessToken);

    api.getNewReleases().then((res)=> {
      setNewReleases(
        res.body.albums.items.map((track)=> {

          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl:track.images[0].url,
          };
        })
      );
    });
  }, [session]);
  console.log(getNewReleases);

  useEffect(function() {
    setDisplayPlayer(true);
  }, []);

  //get lyrics everytime song track changes
  /*
  useEffect(()=>{

    if(!currentTrack) return
    
    axios.get('http://localhost:3000/lyrics', {

      params:{
    
        track: currentTrack.title,
        artist: currentTrack.artist
      }
    }).then(res => {
      setLyrics(res.data.lyrics)   
    })

  },[currentTrack])*/

  // Component Render

  return (
    <div className="bg-cyan-900 h-screen w-screen flex flex-row pt-6">
      <Head>
        <title>Search - Blast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="h-11/12 w-11/12 flex flex-col items-center space-y-12">
        <SearchBar search={search} setSearch={setSearch} />

          <h2 className="text-white font-bold nb-3">
            {searchResults.length ===0 ? "New Releases" : "Searched Tracks"}
          </h2>
        {searchResults.length === 0 ?
        <NewReleases getNewReleases={getNewReleases}/> :
        <SearchList searchResults={searchResults}/>
        }
        {searchResults ===0 && (
          <div className="text-center" style={{ whiteSpace: "pre"}}>
            {lyrics}
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        {session ? (<Player accessToken={session.accessToken} trackUri={currentTrack.uri} />) : null}
      </div>

      <NavBar />
    </div>
  );
}

export default SearchPage;

// search.js ends here