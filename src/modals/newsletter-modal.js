import React from 'react'
import { useState } from 'react';

const NewsletterModal = () => {
  // TODO create 4s timer to auto open modal
  const [modalDisplay, setModalDisplay] = useState('none');
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
    console.log(personalInfo);
  };

  const handleSubmit = () => {
    console.log(personalInfo);
    // TODO connect to db
  };

  const displayModal = () => {
    setModalDisplay('block');
  };

  setTimeout(displayModal, 3000);

  return (
    <div style={{display: {modalDisplay}}} class="modal fade" id="newsletter" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden='true'>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content background-tint-modal">
          <div class="modal-header">
            <h5 class="modal-title text-purple" id="newsletterLabel">Join us!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body modal-text">
            Sign up for our weekly newsletter for exclusive content like meditation tips, recipes, and more!
            <form action="">
              <div class="mb-3 text-start">
                <label for="fullName" class="form-label">Name</label>
                <input type="text" name="fullName" class="form-control" id="fullName" rows="3" placeholder="John Doe" onChange={handleChange} required></input>
              </div>
              <div class="mb-3 text-start">
                <label for="email" class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" onChange={handleChange} required/>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterModal
