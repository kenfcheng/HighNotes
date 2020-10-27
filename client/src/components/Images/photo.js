import React from "react";
// import "./style.css";

function Photo({ src }) {
  return (
    <div
      className="photo"
      role="img"
      aria-label="User Photo"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
}

export default Photo;
