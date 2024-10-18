import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { postVote } from '../../api'; 
import './SuggestionForm.scss';

function SuggestionForm({ suggestion }) {
    const navigate = useNavigate();
    const location = useLocation();
    const suggestionId = location.state.suggestion.id; 
    const [email, setEmail] = useState(''); 
    const [checkbox, setCheckbox] = useState(false);

    const handleHomeClick = () => {
        navigate('/'); 
    };

    const handleCheckbox = () => {
        checkbox? setCheckbox(false) : setCheckbox(true);
    };

    const handleSuggestionClick = async (e) => {
        e.preventDefault(); 
        try {
            const newVote = {
                suggestion_id: suggestionId,
                email: e.target.email.value,
                optin: checkbox
            }
            await postVote(newVote);
            navigate('/vote/thanks'); 
        } catch (error) {
            console.error("Error submitting vote:", error); 
        }
    };

    return (
        <div className="suggestion-form__container">
            <h1 className="suggestion-form__title">Voting for:</h1>
            <p className="suggestion-form__description">{location.state.suggestion.suggestion || "No suggestion provided"}</p>

            <form className="suggestion-form" onSubmit={handleSuggestionClick}>
                <label htmlFor="email" className="suggestion-form__label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="suggestion-form__input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />

                <div className="suggestion-form__notify">
                    <input
                        type="checkbox"
                        id="notify"
                        name="notification"
                        className="suggestion-form__radio"
                        onClick={handleCheckbox}
                    />
                    <label htmlFor="notify" className="suggestion-form__radio-label">Notify me when this change is in action</label>
                </div>

                <div className="suggestion-form__buttons">
                    <button type="submit" className="suggestion-form__button suggestion-form__button--submit">
                        Submit your vote
                    </button>
                    <button type="button" className="suggestion-form__button suggestion-form__button--back" onClick={handleHomeClick}>
                        Back to Home
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SuggestionForm;
