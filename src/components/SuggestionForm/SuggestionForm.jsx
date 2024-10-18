import { useNavigate, useLocation } from 'react-router-dom';
import './SuggestionForm.scss';

function SuggestionForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const suggestion = location.state?.suggestion;

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleSuggestionClick = () => {
      
        navigate('/submitsuggestion'); 
    };

    return (
        <>
            <h1 className="suggestion-form__title">Voting for:</h1>
            <p className="suggestion-form__description">{suggestion?.suggestion || "No suggestion provided"}</p>

            <form className="suggestion-form" onSubmit={handleSuggestionClick}>
                <label htmlFor="email" className="suggestion-form__label">Email</label>
                <input
                    type="email"
                    id="email"
                    className="suggestion-form__input"
                    placeholder="Enter your email address"
                    required 
                />

                <div className="suggestion-form__notify">
                    <input
                        type="radio"
                        id="notify"
                        name="notification"
                        className="suggestion-form__radio"
                    />
                    <label htmlFor="notify" className="suggestion-form__radio-label">Notify me when this change is in action</label>
                </div>

                <div className="suggestion-form__buttons">
                    <button type="submit" className="suggestion-form__button suggestion-form__button--submit">Submit your vote</button>
                    <button type="button" className="suggestion-form__button suggestion-form__button--back" onClick={handleHomeClick}>Back to Home</button>
                </div>
            </form>
        </>
    );
}

export default SuggestionForm;
