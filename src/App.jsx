import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [music, setMusic] = useState([]);
  const fetchMusic = async () => {
    const res = await fetch(`http://localhost:3000/api/music`, {
      method: "GET",
    });
    const data = await res.json();
    setMusic(data);
  };
  useEffect(() => {
    fetchMusic();
  }, []);
  return (
    <div>
      <Form music={music} setMusic={setMusic} />
      <Display music={music} setMusic={setMusic} />
    </div>
  );
};

export default App;
