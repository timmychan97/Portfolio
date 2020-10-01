import React from 'react';
import '../css/YoutubeVideo.css';

export const YoutubeVideo: React.FC<{ src: string }> = props => {
  return (
    <div className="YoutubeVideo">
      <div className="YoutubeVideoWrapper">
        <iframe width="560" height="315"
          src={props.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>
    </div>
  );
}