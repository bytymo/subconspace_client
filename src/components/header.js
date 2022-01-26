import React from 'react';
import lotus from '../images/lotus.mp4';

const Header = () => {
  return (
    <div className='video-div'>
      <video
        className="lotusVideo mb-0"
        type="video/mp4"
        src={lotus}
        loop
        muted
        autoPlay
        playsInline
      ></video>
    </div>
  )
}

export default Header;
