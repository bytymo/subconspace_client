import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import BookingBreadcrumb from '../components/booking-breadcrumb';

const Booking = () => {
  const initialState = {
    question: '',
    option1: '',
    option2: '',
    answer1: '',
    answer2: '',
  }

  const [answers, setAnswers] = useState(initialState)
  const {question, option1, option2, answer1, answer2} = answers

  useEffect(() => {
    if(answer1 === ''){
    setAnswers({
      ...answers,
      question: 'Question 1',
      option1: 'Option 1-1',
      option2: 'Option 1-2'
    }) 
  } else {
    setAnswers({
      ...answers,
      question: 'Question 2',
      option1: 'Option 2-1',
      option2: 'Option 2-2'
    }) 
  }
  }, [answer1, answer2])

  const answerHandler = (e) => {

    const value = answer1 === '' ? 'answer1' : 'answer2'
    setAnswers({
      ...answers,
      [value]: e.target.value
    }) 
  }

  
  return (
    <Fragment>
      <BookingBreadcrumb answers={answers} setAnswers={setAnswers} />
      <h2>{question}</h2>
      <div className="pt-5 d-flex justify-content-evenly">
        <button type='button' className='btn btn-primary' value={option1} onClick={answerHandler}>{option1}</button>
      <button type='button' className='btn btn-primary' value={option2} onClick={answerHandler}>{option2}</button>
      </div>
    </Fragment>
  )
}

export default Booking
