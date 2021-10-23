import React from 'react';
// import black from '../images/lotus-black.png';
// import blue from '../images/lotus-blue.png';
// import dark_purple from '../images/lotus-purple-1.png';
// import light_purple from '../images/lotus-purple-2.png';
// import white from '../images/lotus-white.png';
import lotus from '../images/whiteLotus.svg';

const Header = () => {
  return (
    <img src={lotus} alt="lotus flower expanding and compressing to mirror breathing" title='Photo by Tianhao Zhang on Unsplash' width='100%' />
    // <video
    //     class="lotusVideo"
    //     src={white}
    //     muted
    //     loop
    //     autoplay
    //     playsinline
    //   ></video>
  )
}

export default Header;
