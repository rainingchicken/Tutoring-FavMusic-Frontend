import React, { useEffect, useState } from "react";

const Display = ({ music }) => {
  return (
    <div>
      {music ? (
        music.map((el) => (
          <div className="song">
            <p>{el.artist}</p>
            <p>{el.songTitle}</p>
          </div>
        ))
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Display;
