import React from 'react'
import './submitsuggestion.scss'
import { useNavigate } from 'react-router-dom';
import { postSuggestion } from '../../api';

function SubmitSuggestion() {
    const navigate = useNavigate();

    const addSuggestion = async (event) => {
        const newSuggestion = {
            name: event.target.name.value,
            email: event.target.email.value,
            suggestion: event.target.suggestion.value,
        };
        await postSuggestion(newSuggestion);
        navigate('/submit/thanks')
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        addSuggestion(event);
    }

    const handleHome = () => {
        navigate('/');
    }

  return (
    <div className="submit-form__container">
        <h1 className="submit-form__title">Your suggestion</h1>

        <form className="submit-form" action="submit" onSubmit={(event) => handleOnSubmit(event)}>
            <label htmlFor="name" className="submit-form__label">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                className="submit-form__input"
                placeholder="Enter your name"
            />
              <label htmlFor="email" className="submit-form__label">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="submit-form__input"
                placeholder="Enter your email address"
            />
            <label htmlFor="email" className="submit-form__label">Problem</label>
            <textarea
                id="problem"
                name="suggestion"
                className="submit-form__description"
                placeholder=" "
                rows="4" 
                cols="50" 
            />
            <div className="submit-form__buttons">
                <button type="submit" className="submit-form__button submit-form__button--submit">
                    Submit your suggestion
                </button>
                <button type="button" className="submit-form__button submit-form__button--back" onClick={handleHome}>
                        Back to Home
                </button>
            </div>
        </form>
      </div>
    
  )
}

export default SubmitSuggestion
