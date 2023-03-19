import PropTypes from 'prop-types';
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import Hls from 'hls.js';

export const Player = ({ url }) => {
  const playerRef = useRef(null);

  const handleHlsjsLoad = player => {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(playerRef.current.getInternalPlayer());
  };

  return (
    <ReactPlayer
      url={url}
      controls={true}
      width="100%"
      height="auto"
      config={{
        file: {
          forceHLS: true,
          hlsOptions: {
            xhrSetup: (xhr, url) => {
              xhr.withCredentials = true;
            },
            onLoad: handleHlsjsLoad,
          },
        },
      }}
      ref={playerRef}
    />
  );
};

Player.propTypes = {
  url: PropTypes.string,
};
