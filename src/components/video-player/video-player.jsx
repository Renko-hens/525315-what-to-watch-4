import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {videoRefer} = props;

  return (
    <video className="player__video"
      ref={videoRefer}
      autoPlay={true}
    />
  );
};

VideoPlayer.propTypes = {
  videoRefer: PropTypes.shape({component: PropTypes.instanceOf(React.Component)}),
};

export default VideoPlayer;
