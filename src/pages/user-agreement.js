import React, { useEffect, useState } from 'react';
import { PopupButton } from "react-calendly";
import { useHistory, useLocation } from 'react-router-dom';
import Divider from '../components/divider';
import Footer from '../components/footer';


const UserAgreement = () => {
  const history = useHistory();
  const location = useLocation();
  const { url, message } = location.state;

  const [isChecked, setIsChecked] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const { firstName, lastName, email } = personalInfo;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      if(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && firstName.length > 1 && lastName.length > 1 && isChecked){
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
  }, [formIsValid, isChecked, firstName, lastName, email]);

  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const completeHandler = (e) => {
    history.go('/');
  };

  return (
    <div className='h-100'>
      <h2 className="h-100 pt-5">Coaching Agreement</h2>
      <Divider />
      <form>
        <div id="termsConditions" className="col-med-12">
          <ol>
            <li>As a client, I understand and agree that I am fully responsible for my physical, mental and emotional well-being during my coaching calls, including my choices and decisions. I am aware that I can choose to discontinue coaching at any time.</li>
            <li>I understand that “coaching” is a Professional-Client relationship I have with my coach that is designed to facilitate the creation/development of personal, professional or business goals and to develop and carry out a strategy/plan for achieving those goals.</li>
            <li>I understand that coaching is a comprehensive process that may involve all areas of my life, including work, finances, health, relationships, education and recreation. I acknowledge that deciding how to handle these issues, incorporate coaching into those areas, and implement my choices is exclusively my responsibility.</li>
            <li>I understand that coaching does not involve the diagnosis or treatment of mental disorders as defined by the American Psychiatric Association. I understand that coaching is not a substitute for counseling, psychotherapy, psychoanalysis, mental health care or substance abuse treatment and I will not use it in place of any form of diagnosis, treatment or therapy.</li>
            <li>I promise that if I am currently in therapy or otherwise under the care of a mental health professional, that I have consulted with the mental health care provider regarding the advisability of working with a coach and that this person is aware of my decision to proceed with the coaching relationship.</li>
            <li>I understand that information will be held as confidential unless I state otherwise, in writing, except as required by law.</li>
            <li>I understand that certain topics may be anonymously and hypothetically shared with other coaching professionals for training OR consultation purposes.</li>
            <li>I understand that coaching is not to be used as a substitute for professional advice by legal, medical, financial, business, spiritual/religious  or other qualified professionals. I will seek independent professional guidance for legal, medical, financial, business, spiritual/religious or other matters. I understand that all decisions in these areas are exclusively mine and I acknowledge that my decisions and my actions regarding them are my sole responsibility.</li>
          </ol>

          <h5>Fees:</h5>
          <p>
            All fees are paid for in full, unless specified by the prior agreement. Additional appointments can be scheduled as needed.
          </p>
          <p>
            If you need to reschedule an appointment, please provide at least 24 hour's notice. Any reschedules above 2 in a month will be forfeited. Any and all no call/no show sessions will be forfeited. 
          </p>

          <h5>Services:</h5>
          <p>
            The services to be provided by the coach to the client are face-to-face or zoom/ Skype-coaching, as agreed jointly with the client. Coaching may address specific personal projects, business successes, or general conditions in the client's life or profession
          </p>
          <p>
            Other coaching services include value clarification, brainstorming, identifying plans of action, examining modes of operating in life, asking clarifying questions, and making empowering requests or suggestions for action. Throughout the working relationship, the coach will engage in direct and personal conversations.
          </p>
          <p>
            The client understands that successful coaching requires a co-active collaborative approach between client and coach. In the coaching relationship, the coach plays the role of a facilitator of change, but it is the client's responsibility to enact or bring about the change. If the client believes the coaching is not working as desired, the client will communicate and take action to return the power to the coaching relationship.
          </p>

          <h5>Prior History:</h5>
          <p>
            The client also agrees to disclose details of the past or present psychological or psychiatric treatment. In entering into the coaching relationship, and signing the agreement, you are agreeing that if any mental health difficulties arise during the course of the coaching relationship, you will notify me immediately so that I can discuss with you appropriate steps and if any additional referrals are needed.
          </p>

          <h5>Privacy:</h5>
          <p>
            The client can, at any point in the coaching session, declare his/her preference not to discuss a specific issue, by simply stating that they would rather not discuss this issue. The coach agrees to respect this boundary and will not attempt to forward the conversation further along those lines.
          </p>
          <p>
            Subcon Space reserves the right to use client results and data for marketing purposes. Personal information such as names will only be used with client consent.
          </p>

          <h5>Confidentiality:</h5>
          <p>
            All information about the coach / client relationship will remain strictly confidential except in very rare circumstances where decreed by law; ie. where the court might issue a subpoena for the file or information.
            <hr />
            If you wish for me as your coach to speak to someone outside our interactions, then you need to give me written permission (original letter, or email) to do so. Exceptions to confidentiality of course relate to circumstances such as intent to seriously harm someone, child abuse etc. Otherwise, all your information is confidential.
          </p>
          <p>
           It is also important to note that in some situations, it is important to be aware of the use of technology in that for some clients, there is a risk in using certain media such as the internet, mobile phones and cordless phones. If you use these to communicate with me, then I will assume that it is appropriate to continue to do so in my interactions with you.
          </p>

          <h5>Termination:</h5>
          <p>
            Coaching under the terms and aforementioned agreements will continue for the duration of the contracted period. Only under extenuating circumstances can our coaching agreement be postponed up to 3 months of the said agreement.
          </p>
        </div>
        <div className='row col-12 pt-4 justify-content-between m-auto'>
          <div className="col-12 col-md-4 mb-2 form-floating text-dark">
            <input type="text" className="form-control" name='firstName' id="firstName" value={firstName} onChange={onChange} placeholder='First Name' required />
            <label for="firstName" className='mx-2'>First Name</label>
          </div>
          <div className="col-12 col-md-4 mb-2 form-floating text-dark">
            <input type="text" className="form-control" name='lastName' id="lastName" value={lastName} onChange={onChange} placeholder='Last Name' required />
            <label for="lastName" className='mx-2'>Last Name</label>
          </div>
          <div className="col-12 col-md-4 mb-2 form-floating text-dark">
            <input type="email" className="form-control" name='email' id="email" value={email.length ? email : null} onChange={onChange} placeholder='Email Address' required />
            <label for="email" className='mx-2'>Email Address</label>
          </div>
        </div>
        
        <div className="col-12">
          <div className="form-check text-start mt-3 d-flex justify-content-center justify-content-md-start">
            <input className="form-check-input ms-md-0 me-2" type="checkbox" value="" id="termsConditionsCheckbox" checked={isChecked} onChange={handleCheckbox} required />
            <label className="form-check-label" for="termsConditionsCheckbox">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12 mt-3 mb-5">
        { formIsValid ? 
        (<PopupButton
              onClick={completeHandler}
              className='btn btn-primary'
              text='Submit'
              url={url}
              prefill={{
                firstName,
                lastName,
                name: `${firstName} ${lastName}`,
                email,
                customAnswers: {
                  a1: `I am looking to${message ? ` ${message}` : '...'}`
                }
              }}
            />) :
            (
              <button type="button" className='btn btn-outline-info fw-bold' disabled autoFocus>Submit</button>
            )}
        </div>
      </form>
      <Divider/>
      <Footer />
    </div>
  )
}

export default UserAgreement
