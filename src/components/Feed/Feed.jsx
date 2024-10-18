import { useState, useEffect } from 'react';
import { getSuggestions } from '../../api';
import logo from '../../assets/images/Bell_logo.svg'
import SuggestionOption from '../SuggestionOption/SuggestionOption';
import './Feed.scss';

function Feed() {
    const [suggestionsList, setSuggestionsList] = useState([]);
    const [selectedTop, setSelectedTop] = useState(true);
    const [selectedNew, setSelectedNew] = useState(false);
    const [selectedAll, setSelectedAll] = useState(false);

    useEffect(() => {
        const retrieveSuggestions = async () => {
            const suggestions = await getSuggestions();
            if (suggestions) {
                if (selectedTop) {
                    const sorted = suggestions.sort((a, b) => b.votes - a.votes)
                    const topThree = (sorted.slice(0, 3))
                    setSuggestionsList(topThree);
                } else if (selectedNew) {
                    const sorted = suggestions.sort((a, b) => b.timestamp - a.timestamp)
                    setSuggestionsList(sorted);
                } else if (selectedAll) {
                    setSuggestionsList(suggestions);
                }
            };
        }
        retrieveSuggestions();
    }, [suggestionsList])

    const handleTop = () => {
        setSelectedTop(true);
        setSelectedNew(false);
        setSelectedAll(false);
    };

    const handleNew = () => {
        setSelectedTop(false);
        setSelectedNew(true);
        setSelectedAll(false);
    };

    const handleAll = () => {
        setSelectedTop(false);
        setSelectedNew(false);
        setSelectedAll(true);
    };

    return (
        <div className='feed'>
            <div className='feed__hero'>
                <img className='feed__logo' src={logo} />
                <h1 className='feed__title'>Vote for change in your community</h1>
                <p className='feed__blurb'>Bell is committed to contributing to a better world, community, and workplace. Join us in this mission by voicing your opinion and voting for the change you want to see most in your community. We’ll then partner with a community organization that can make the idea with the most votes a reality.</p>
            </div>
            <div className='feed__filters'>
                <button className={`feed__button ${selectedTop ? 'feed__button--selected' : ''}`} onClick={handleTop}>Top</button>
                <button className={`feed__button ${selectedNew ? 'feed__button--selected' : ''}`} onClick={handleNew}>New</button>
                <button className={`feed__button ${selectedAll ? 'feed__button--selected' : ''}`} onClick={handleAll}>All</button>
            </div>
            <div className='feed__main'>
                {suggestionsList.map(suggestion => <SuggestionOption suggestion={suggestion} key={suggestion.id} />)}
            </div>
        </div>
    );
}

export default Feed;