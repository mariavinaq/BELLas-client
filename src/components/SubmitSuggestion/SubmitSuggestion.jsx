import React from 'react'
import './submitsuggestion.scss'

function SubmitSuggestion() {
  return (
    <>
        <h1 className="submit-form__title">Your suggestion</h1>

        <form className="submit-form" action="submit">
            <label htmlFor="email" className="submit-form__label">Name</label>
            <input
                type="email"
                id="email"
                className="submit-form__input"
                placeholder="Enter your email address"
            />
              <label htmlFor="email" className="submit-form__label">Email</label>
            <input
                type="email"
                id="email"
                className="submit-form__input"
                placeholder="Enter your email address"
            />
            <label htmlFor="email" className="submit-form__label">Problem</label>
            <input
                type="email"
                id="email"
                className="submit-form__description"
                placeholder=" "
            />
            <div className="submit-form__buttons">
                <button type="button" className="submit-form__button submit-form__button--submit">Submit your suggestion</button>
            </div>
        </form>
      </>
    
  )
}

export default SubmitSuggestion
