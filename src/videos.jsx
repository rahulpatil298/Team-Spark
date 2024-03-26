import React from 'react';
import './VideoPlayer.css'; // Import your CSS file for styling

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video controls>
        <source src="https://codemaster00001.github.io/Spark-Ignited/video11.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;


