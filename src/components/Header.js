import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      <div className="marquee">
        <p>{currentTrackName}</p>
      </div>
      {/* <marquee>{currentTrackName}</marquee> */}
    </div>
  );
}

export default Header;
