import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useStateProvider } from "../utils/stateProvider";
import { reducerCases } from "../utils/constants";

function CurrentTrack() {
  const [{ token, currentPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data !== "") {
        const {item} = response.data;
        const currentPlaying = {
          id: item.id,
          name: item.name,
          artist: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
      console.log(response);
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{currentPlaying.name}</h4>
            <h6 className="track__info__track__artists">
              {/* {currentPlaying.artist.join(" ")} */}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}const Container = styled.div`
.track {
  display: flex;
  align-items: center;
  gap: 1rem;
  &__image {
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    &__track__name {
      color: white;
    }
    &__track__artists {
      color: #b3b3b3;
    }
  }
}`;
export { CurrentTrack };
