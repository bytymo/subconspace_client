import React from 'react';
import mobileImg from '../images/purple-sky-moon-square.jpg'

const BackgroundImage = () => {
  return (
    <>
      <div className="parallax d-none d-lg-block" />
      <div className="d-lg-none" >
        <img src={mobileImg} width='100%' alt="mobile version of parallax moon"  />
      </div>
    </>
  );
};

export default BackgroundImage;
