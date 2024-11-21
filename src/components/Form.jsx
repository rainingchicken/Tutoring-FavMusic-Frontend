import React, { useState } from "react";

const Form = ({ music, setMusic }) => {
  const [artist, setArtist] = useState("");
  const [songTitle, setSongTitle] = useState("");

  const handleChangeArtist = (e) => {
    setArtist(e.target.value);
  };

  const handleChangeSong = (e) => {
    setSongTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSong = { artist, songTitle };
    try {
      const res = await fetch(`http://localhost:3000/api/music`, {
        method: "POST",
        body: JSON.stringify(newSong),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMusic([...music, data]);
    } catch (error) {
      console.error(`unable to post`, error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id="artistInput"
        placeholder="artist"
        onChange={handleChangeArtist}
        required
      />
      <input
        type="text"
        name=""
        id="songTitleInput"
        placeholder="song title"
        onChange={handleChangeSong}
        required
      />
      <button>add</button>
    </form>
  );
};

export default Form;
