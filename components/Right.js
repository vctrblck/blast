import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { BiBell } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { ViewGridIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
//import RecentlyPlayed from "./RecentlyPlayed";
import SpotifyWebApi from "spotify-web-api-node";
import RecentlyPlayed from "./RecentlyPlayed";

import { useRecoilState } from "recoil";
//import { useRecoilState } from "recoil";
import { playbackState, currentTrackState } from "./../atoms/playerAtom";

/*const api = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID
  });*/

function Right ({api}){

    const { data: session } = useSession();
    //const { accessToken } = session?.accessToken;
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const [currentTrack, setCurrentTrack] = useRecoilState(currentTrackState);

    useEffect(() => {
        if (!session) return;
        api.setAccessToken(session.accessToken);
        api.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
          setRecentlyPlayed(
            
            res.body.items.map(({ track }) => {
              return {
                id: track.id,
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: track.album.images[0].url,
              };
            })
          );
        });
      }, [session,currentTrack]);
      console.log(recentlyPlayed);

    return (
        <section  className="p-4 space-y-8 pr-8">
            <div className="flex space-x-2 items-center justify-between">
                {/* Icons */}
                <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4">
                    <HiOutlineShieldCheck className="text-[#CCCCCC] text-xl" />
                    <MdOutlineSettings className="text-[#CCCCCC] text-xl" />
                    <div>
                        <BiBell className="text-[#CCCCCC] text-xl" />
                    </div>
                </div>
                {/* Profile */}
                <Dropdown/>
            </div>
            {/* Recently Played TRacts */ }
            <div className="bg-[#3967af] border-2 border-[#262626] p-4 rounded-xl space-y-4">
                <div className="flex items-center justify-between" >
                <h4 className="text-white font-semibold text-sm">Recently Played</h4>
                <ViewGridIcon className="text-[#686868] h-6" />
                </div>

                <div className="space-y-4 overflow-y-scroll overflow-x-hidden h-[250px] md:h-[300px] scrollbar-hide">
                    {recentlyPlayed.map((track,index)=>(
                        <RecentlyPlayed
                        key={index}
                        track = {track}
                        />
                    ))}
                </div>
                <button className="text-[#CECECE] bg-[#1A1A1A] text-[13px] py-3.5 px-4 rounded-2xl w-full font-bold bg-opacity-80 hover:bg-opacity-100 transition ease-out">Display All</button>
            </div>
        </section>
    );
}

export default Right;