import React from 'react'
import { Fragment } from 'react';

const BookingBreadcrumb = ({answers, setAnswers}) => {
  console.log(answers);
  const goBack = () => {
    setAnswers({
      ...answers,
      answer1: ''
    })
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        {answers.answer1 === '' ?
          (
            <li className="breadcrumb-item active" aria-current="page">Question 1</li>
          ) :
          (
            <Fragment>
              <li className="breadcrumb-item" aria-current="page"><a href="/booking" onClick={goBack}>Question 1</a></li>
              <li className="breadcrumb-item active" aria-current="page">Question 2</li>
            </Fragment>
          )
        }
        
      
      </ol>
    </nav>
  )
}

export default BookingBreadcrumb
