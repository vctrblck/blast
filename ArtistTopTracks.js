import React, { Component } from "react";
import PropTypes from "prop-types";
//this will show the tracks that you play often
import Tracks from "components/Common/Tracks";
import BlockHeader from "components/Common/BlockHeader";
import SkeletonTracks from "components/Skeleton/SkeletonTracks";
import { connectArtistTopTracks }
from "containers/Tracks/ArtistTopTracksContainer";

export class ArtistTopTracks extends Component {
  componentDidMount() {
    this.props.loadTopTracks(this.props.id);
  }

  componentDidUpdate(prevProps) {
    const {id, loadTopTracks} = this.props;
    if (id !== prevProps.id) {
      loadTopTracks(id);
    }
  }
// we are using the spotify api to render the songs
  render() {
    const {items, pending} = this.props.tracks;
    const source = {name: `ArtistTopTracks_${this.props.id}`};
    if (pending) {
      return (
        <SkeletonTracks
          className="artist-top-tracks"
          header={true}
        />
      );
    }
    return (
      <section>
        <BlockHeader title='Songs by artist' />
        <section className="tracks tracks_col-2">
          <Tracks
            columns={2}
            trackList={items}
            source={source}
          />
        </section>
      </section>
    );
  }
}

ArtistTopTracks.propTypes = {
  tracks: PropTypes.object.isRequired,
  loadTopTracks: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default connectArtistTopTracks(ArtistTopTracks);