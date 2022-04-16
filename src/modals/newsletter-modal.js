import React, { useState, useEffect } from 'react'
import {isEmail} from 'validator';
import axios from "axios";
import config from '../config';

const NewsletterModal = () => {
  const [disabled, setDisabled] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const {name, email} = personalInfo
    if(name && (email && isEmail(email))){
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [personalInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: `${config.API_URL}/subscribers`,
      data: personalInfo
    });
  };

  return (
    <div className="modal fade" id="newsletter" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden='true'>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content background-tint-modal">
          <div className="modal-header">
            <h5 className="modal-title text-purple" id="newsletterLabel">Join us!</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body modal-text">
            Sign up for exclusive content like meditation tips, recipes, and more!
            <form action="">
              <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="name" rows="3" placeholder="John Doe" onChange={handleChange} required></input>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} required/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button disabled={disabled} type="button" className={`btn ${disabled ? 'btn-outline-info' : 'btn-primary'}`} onClick={handleSubmit} data-bs-dismiss="modal">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterModal
