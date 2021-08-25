import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <Link to='/' className="btn btn-info float-start d-block" type='button'><i class="fas fa-home"></i> Home</Link>
      <p className='display-6 d-block w-100 mt-5'>Thank you for booking. We look forward to meeting with you!</p>
      <p className="lead">In the meantime, I encourage you to check out our YouTube and Instagram pages for some mindfulness tips and meditation segments.</p>
      <a href="https://www.instagram.com/subconspace/" target='_blank' rel="noreferrer" className="btn btn-info float-start d-block"><i class="fab fa-instagram"></i> Instagram</a>
      <a href="https://www.youtube.com/channel/UCfKaKJB47s4NUfi8S36Dwlw" target='_blank' rel="noreferrer" className="btn btn-info float-start d-block"><i class="fab fa-youtube"></i> YouTube</a>
    </div>
  )
}

export default Thankyou
