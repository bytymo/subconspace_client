import React from 'react';
// import black from '../images/lotus-black.png';
// import blue from '../images/lotus-blue.png';
// import dark_purple from '../images/lotus-purple-1.png';
// import light_purple from '../images/lotus-purple-2.png';
// import white from '../images/lotus-white.png';
// import lotus from '../images/whiteLotus.svg';
import lotus from '../images/whiteLotus.mp4';

const Header = () => {
  return (
    <video
        class="lotusVideo"
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
