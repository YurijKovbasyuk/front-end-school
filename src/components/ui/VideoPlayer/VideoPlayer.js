// import React, { useRef, useEffect, useState } from 'react';
// import Hls from 'hls.js';

// export const VideoPlayer = ({ videoUrl }) => {
//   console.log(videoUrl);
//   const videoRef = useRef(null);
//   const [hls, setHls] = useState(null);

//   useEffect(() => {
//     if (Hls.isSupported()) {
//       const video = videoRef.current;
//       console.log('videoRef: ', videoRef);
//       console.log('video:', video);
//       const hlsInstance = new Hls();
//       setHls(hlsInstance);

//       hlsInstance.loadSource(videoUrl);
//       hlsInstance.attachMedia(video);

//       hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
//         video.play();
//       });
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       if (hls) {
//         hls.destroy();
//       }
//     };
//   }, [hls]);

//   return <video ref={videoRef} controls />;
// };

import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

export const VideoPlayer = props => {
  const videoRef = useRef(null);

  console.log('src', props.src);
  console.log('videoRef', videoRef);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(props.src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = props.src;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    }
  }, [props.src]);

  return (
    <video
      ref={videoRef}
      autoPlay={props.autoPlay}
      controls={props.controls}
      width={props.width}
      height={props.height}
    />
  );
};
