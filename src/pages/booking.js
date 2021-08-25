import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import BookingBreadcrumb from '../components/booking-breadcrumb';
import { PopupButton } from "react-calendly";

const Booking = () => {
  const initialState = {
    question: '',
    option1: '',
    option2: '',
    answer1: '',
    answer2: '',
    url: '',
  }

  const [answers, setAnswers] = useState(initialState)
  const {question, option1, option2, answer1, answer2, url} = answers

  useEffect(() => {
    if(answer1 === ''){
    setAnswers({
      ...answers,
      question: 'Lorem ipsum dolor sit amet consectetur?',
      option1: 'Tina',
      option2: 'Will'
    }) 
  } else {
    setAnswers({
      ...answers,
      question: 'Minus cumque autem quas voluptatibus?',
      option1: 'Option 2-1',
      option2: 'Option 2-2'
    }) 
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer1, answer2])

  const answerHandler = (e) => {
    const { value } = e.target
    const res = answer1 === '' ? 'answer1' : 'answer2'
    setAnswers({
      ...answers,
      [res]: value,
      url: value === 'Tina' ? 'https://calendly.com/subconcoachtina/15min' : 'https://calendly.com/subconcoaching/15'
    })
  }

  
  return (
    <div className='h-100'>
      <BookingBreadcrumb answers={answers} setAnswers={setAnswers} />
      <h2 className="h-100 pt-5">{question}</h2>
      <div className="h-100 pt-5 d-flex justify-content-evenly align-items-center">
        {answer1 === '' ? (
          <Fragment>
            <button style={{minWidth: '80px'}} type='button' className='btn btn-primary' value={option1} onClick={answerHandler}>{option1}</button>
            <button style={{minWidth: '80px'}} type='button' className='btn btn-primary' value={option2} onClick={answerHandler}>{option2}</button>
          </Fragment>
        ) : (
          <Fragment>
            <PopupButton
            onClick={answerHandler}
            className='btn btn-info'
            text={option1}
            url={url}
            prefill={{
              customAnswers: {
                a1: `I am looking for ${option1}`
              }
            }}
            />
            <PopupButton
            onClick={answerHandler}
            className='btn btn-info'
            text={option2}
            url={url}
            prefill={{
              customAnswers: {
                a1: `I am looking for ${option2}`
              }
            }}
            />
          </Fragment>
          
        )
      }
        
      </div>
    </div>
  )
}

export default Booking
