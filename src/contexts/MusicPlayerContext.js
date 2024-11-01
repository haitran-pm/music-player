import React, { useState } from "react";
import Track1 from "../data/track1.mp3";
import Track2 from "../data/track2.mp3";
import Track3 from "../data/track3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "BTS - Black Swan",
      file: Track1,
    },
    {
      name: "Lady Gaga, Bruno Mars - Die With A Smile",
      file: Track2,
    },
    {
      name: "ROSE & Bruno Mars - APT.",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
