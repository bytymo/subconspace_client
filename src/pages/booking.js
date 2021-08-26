import React from 'react'
import { PopupButton } from "react-calendly";
import { useHistory } from 'react-router-dom';

const Booking = () => {
  const history = useHistory()
  const option1= 'Discovering my passion/purpose'
  const option2= 'Increasing the mind/body connection through yoga'
  const option3= 'Improving my overall mood and mindset'
  const option4= 'Transitioning to and thriving on a plant based lifestyle'

  const completeHandler = (e) => {
    history.go('/')
  }

  return (
    <div className='h-100'>
      <h2 className="h-100 pt-5">I am looking for...</h2>
      <div className="pt-5 d-grid gap-2 d-md-block">
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className="col-12 col-md-6 popup">
            <PopupButton
              className='btn btn-primary w-100 h-100'
              text={option1}
              url='https://calendly.com/subconcoachtina/15min'
              prefill={{
                customAnswers: {
                  a1: `I am looking for ${option1}`
                }
              }}
            />
          </div>
          <div className="col-12 col-md-6 popup">
            <PopupButton
              onClose={completeHandler}
              className='btn btn-primary w-100 h-100'
              text={option2}
              url='https://calendly.com/subconcoachtina/15min'
              prefill={{
                customAnswers: {
                  a1: `I am looking for ${option2}`
                }
              }}
            />
          </div>
          <div className="col-12 col-md-6 popup">
            <PopupButton
              onClick={completeHandler}
              className='btn btn-primary w-100 h-100'
              text={option3}
              url='https://calendly.com/subconcoaching/15'
              prefill={{
                customAnswers: {
                  a1: `I am looking for ${option3}`
                }
              }}
            />
          </div>
          <div className="col-12 col-md-6 popup">
            <PopupButton
              onClick={completeHandler}
              className='btn btn-primary w-100 h-100'
              text={option4}
              url='https://calendly.com/subconcoaching/15'
              prefill={{
                customAnswers: {
                  a1: `I am looking for ${option4}`
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
