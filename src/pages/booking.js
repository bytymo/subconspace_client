import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const { bookWill, bookTina } = location.state;

  const option1= 'discover my passion/purpose';
  const option2= 'increase the mind/body connection through yoga';
  const option3= 'improve my overall mood and mindset';
  const option4= 'transition to and thriving on a plant based lifestyle';

  return (
    <div className='h-100'>
      <h2 className="h-100 pt-5">I am looking to...</h2>
      <div className="pt-5 d-grid gap-2 d-md-block">
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className="col-12 col-md-6 popup">
            <Link className='btn btn-primary w-100 h-100 align-middle' to={{pathname: '/agreement', state: {url: bookTina, message: option1}}}>{option1.toLocaleUpperCase()}</Link>
          </div>
          <div className="col-12 col-md-6 popup">
            <Link className='btn btn-primary w-100 h-100 align-middle' to={{pathname: '/agreement', state: {url: bookTina, message: option2}}}>{option2.toLocaleUpperCase()}</Link>
          </div>
          <div className="col-12 col-md-6 popup">
            <Link className='btn btn-primary w-100 h-100 align-middle' to={{pathname: '/agreement', state: {url: bookWill, message: option3}}}>{option3.toLocaleUpperCase()}</Link>
          </div>
          <div className="col-12 col-md-6 popup">
            <Link className='btn btn-primary w-100 h-100 align-middle' to={{pathname: '/agreement', state: {url: bookWill, message: option4}}}>{option4.toLocaleUpperCase()}</Link>
          </div>
        </div>
        <a className="btn btn-outline-info" href='/thankyou' style={{marginTop: '50px'}}>To Thank you page</a>
      </div>
    </div>
  )
}

export default Booking
