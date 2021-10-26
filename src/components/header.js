import React from 'react';
import lotus from '../images/lotus.mp4';

const Header = () => {
  return (
    <video
        className="lotusVideo mb-0 mb-md-5"
        type="video/mp4"
        src={lotus}
        loop
        muted
        autoPlay
        playsInline
      ></video>
  )
}

export default Header;
