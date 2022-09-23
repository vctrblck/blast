import React, { useEffect } from "react";
import Track from "./Track"

function NewReleases({getNewReleases})
{
    return(

        <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#3967af]
        overflow-y-scroll h-[1000px] md:h-96 scrollbar-thin scrollbar-thumb-gray-600
         scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 w-[830px]">

            {getNewReleases.map(function(track){
                return (
                    <Track 
                    key={track.uri}
                    track = {track}
                    />
                )
            })}
        </div>
    )
}
export default NewReleases;