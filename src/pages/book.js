import React, { Fragment, useState, useEffect } from 'react';
import Divider from '../components/divider';
import Footer from '../components/footer';
import frontCover from '../images/goddess-book-front.jpeg';


const Book = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    return setIsMobile(window.innerWidth <= 991)
  }, []);
  
  return (
    <div className='bg-dark h-100'>
      <h1>The Wellness Universe Guide to Complete Self-Care: 25 Tools for Goddesses</h1>

      <div className="book-row row justify-content-around h-100 mt-3 mx-0 p-0">
        <div className="col order-2 order-md-1 col-12 col-md-4 h-100 mt-3 mt-md-0 p-0">
          <h5>
            25 dedicated Wellness Universe experts. . .
          </h5>
          <p>
            . . . come together to help you live a life of well-being, confidence, balance, and betterment in this powerful collaboration.
          </p>
          <p>
            The collective wisdom, expertise, and passion contained in the pages you’re about to read is beyond what you can imagine. With the power of their authentic stories, and the master teaching of their tools, what you have in your hands supports you to live in your unique Goddess energy from a foundational, whole-person approach.
          </p>
          <p>
            This book is a natural extension of the power of The Wellness Universe community, and its mission to help make the world a better place. May all the joys in life you wish for and deserve be yours!
          </p>
          <p>
            Grab it now!
          </p>
          <a className='btn btn-primary' href='https://www.amazon.com/dp/1954047401' target='_blank' rel="noreferrer" >Purchase Book</a>

          <div className='my-5'>
            <p>Don't forget to follow your fellow goddess on social!</p>
            <div className='mb-3'>
              <a href="https://www.instagram.com/goodgirltinamarie/" target='_blank' rel='noreferrer'><i className="fab fa-instagram fs-1 mx-2 btn-media"></i></a>
              <a href="https://www.thewellnessuniverse.com/world-changers/tinaplantillas/" target='_blank' rel='noreferrer'><i className="fas fa-blog fs-1 mx-2 btn-media"></i></a>
            </div>
          </div>
        </div>
        <div className="col order-1 order-md-2 col-12 col-md-4 mx-0 p-0">
          <img src={frontCover} className="img-fluid p-0 m-0 w-100" alt="..." />
        </div>
      </div>
      {
        !isMobile ? (
          <Fragment>
            <Divider />
            <Footer />
          </Fragment>
        ) : (
          <div className='p-0 m-0'/>
        )
      }
    </div>
  );
};

export default Book;
