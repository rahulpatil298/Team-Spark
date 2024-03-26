import React from 'react';
import './Images.css'; // Import CSS file for styling

const ImageComponent = () => {
  return (
    <>
    <div className="image-container">
        <img src="https://codemaster00001.github.io/Spark-Ignited/team2.jpeg" alt="Description of the image" className="responsive-image" />
    </div>
    <div className="image-container">
        <img src="https://codemaster00001.github.io/Spark-Ignited/team1.jpeg" alt="Description of the image" className="responsive-image" />
    </div>

  </>
    
  );
};

export default ImageComponent;
