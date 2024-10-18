import React, { useState } from 'react';
import './submitsuggestion.scss';
import axios from 'axios';

function SubmitSuggestion() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [problem, setProblem] = useState('');
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(null); 
        setLoading(true); 

        const suggestionData = {
            name,
            email,
            problem,
        };

        console.log("Submitting suggestion:", suggestionData); // Debug log

        try {
            const response = await axios.post('http://localhost:5050/suggestions', suggestionData);
            console.log("Response from API:", response.data); 
            setName('');
            setEmail('');
            setProblem('');
        } catch (error) {
            setError("Error submitting suggestion. Please try again.");
            console.error("Error submitting suggestion:", error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <>
            <h1 className="submit-form__title">Your suggestion</h1>

            {error && <p className="error-message">{error}</p>}
            
            <form className="submit-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="name" className="submit-form__label">Name</label>
                <input
                    type="text"
                    id="name"
                    className="submit-form__input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                
                <label htmlFor="email" className="submit-form__label">Email</label>
                <input
                    type="email"
                    id="email"
                    className="submit-form__input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <label htmlFor="problem" className="submit-form__label">Problem</label>
                <textarea
                    id="problem"
                    className="submit-form__description"
                    placeholder="Describe your problem"
                    rows="4"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    required
                />
                
                <div className="submit-form__buttons">
                    <button 
                        type="submit" 
                        className="submit-form__button submit-form__button--submit"
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? 'Submitting...' : 'Submit your suggestion'}
                    </button>
                </div>
            </form>
        </>
    );
}

export default SubmitSuggestion;
